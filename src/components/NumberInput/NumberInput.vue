<template>
  <div ref="wrapper" role="group" :class="inputClassname" @click="control?.focus()">
    <input
      class="chi-number-input__control"
      ref="control"
      type="text"
      :disabled="disabled"
      :id="controlId"
      :placeholder="placeholder"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"
    />
    <template v-if="props.controlType !== 'none'">
      <div
        class="chi-number-input__plus"
        aria-label="增加"
        role="button"
        :aria-controls="controlId"
        @pointerdown.prevent="handleHold('plus', $event)"
        @mousedown.prevent
      >
        <Icon name="chevron-up" />
      </div>
      <div
        class="chi-number-input__minus"
        aria-label="减少"
        :aria-controls="controlId"
        @pointerdown.prevent="handleHold('minus', $event)"
        @mousedown.prevent
      >
        <Icon name="chevron-down" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useHover } from '../../hooks'
import { boundRange, getGlobalCount, isNull, isValidNumber, toFixed, toNumber } from '../../utils'
import type { NumberInputEmits, NumberInputProps } from './types'
import Icon from '../Icon/Icon.vue'

type InputEventType = 'input' | 'change'

const isEmpty = (value: unknown) => !value && value !== 0
const isNullOrNaN = (value: unknown) => isNull(value) || Number.isNaN(value)

defineOptions({
  name: 'chi-number-input',
})
const props = withDefaults(defineProps<NumberInputProps>(), {
  max: Infinity,
  min: -Infinity,
  placeholder: '请输入数字',
  precision: -1,
  step: 1,
  value: null,
})
const emits = defineEmits<NumberInputEmits>()

const focused = ref(false)

const control = ref<HTMLInputElement>()
const { wrapper, isHover } = useHover()

const currentValue = ref<string | number>(
  isEmpty(props.value) ? getEmptyValue() : toNumber(props.value),
)
const inputting = ref(false)

const idIndex = `${getGlobalCount()}`
const controlId = `chi-number-input-${idIndex}__control`

let lastValue: number

const plusDisabled = computed(() => {
  return (
    props.disabled ||
    (!isNullOrNaN(currentValue.value) && toNumber(currentValue.value) >= props.max)
  )
})

const minusDisabled = computed(() => {
  return (
    props.disabled ||
    (!isNullOrNaN(currentValue.value) && toNumber(currentValue.value) <= props.min)
  )
})

const inputClassname = computed(() => {
  const { disabled, size } = props
  const classname: Record<string, boolean> = {
    'chi-number-input': true,
    'chi-number-input--disabled': disabled,
    'chi-number-input--focused': inputting.value,
  }
  if (size) classname[`chi-number-input--${size}`] = true

  return classname
})

const preciseNumber = computed(() => {
  return !inputting.value &&
    typeof currentValue.value === 'number' &&
    !Number.isNaN(currentValue.value) &&
    props.precision >= 0
    ? toFixed(currentValue.value, props.precision)
    : currentValue.value
})

const formattedValue = computed(() => {
  if (isNullOrNaN(preciseNumber.value) || typeof preciseNumber.value !== 'number') {
    return preciseNumber.value ?? ''
  }

  return !inputting.value && typeof props.formatter === 'function'
    ? props.formatter(preciseNumber.value as number)
    : preciseNumber.value.toString()
})

watch(
  () => props.value,
  (value) => {
    if (value !== lastValue) {
      parseValue()
    }
  },
  { immediate: true },
)

onMounted(() => {
  setInputValue(inputting.value ? currentValue.value : formattedValue.value)
})

defineExpose({
  blur: () => control.value?.blur(),
  focused,
  input: control,
  isHover,
})

function setInputValue(value?: number | string | null) {
  if (control.value) {
    control.value.value = isNullOrNaN(value) ? '' : value!.toString()
  }
}

function boundValueRange(value: number) {
  return boundRange(value, props.min, props.max)
}

function parseValue() {
  let value = props.value
  value = inputting.value
    ? isEmpty(props.value)
      ? getEmptyValue()
      : toNumber(props.value)
    : isValidNumber(value, true)
      ? toNumber(value)
      : getEmptyValue()

  if (props.precision >= 0 && !isNullOrNaN(value)) {
    value = toFixed(boundValueRange(value), props.precision)
  }

  currentValue.value = value
  lastValue = value

  setInputValue(inputting.value ? value : formattedValue.value)
}

function handleInput(event: Event) {
  // TODO: debounce and throttle
  handleChange(event)
}

function focus(options?: { preventScroll?: boolean; focusVisible?: boolean }) {
  control?.value?.focus(options)
}

function handleFocus(event: FocusEvent) {
  focused.value = true
  inputting.value = true
  emits('focus', event)
}

function handleBlur(event: FocusEvent) {
  focused.value = false

  setTimeout(() => {
    if (!focused.value) {
      inputting.value = false
      emits('blur', event)
      emitChangeEvent('change')
    }
  }, 120)
}

function handleHold(type: 'plus' | 'minus', event: PointerEvent) {
  const disabled = type === 'plus' ? plusDisabled : minusDisabled
  const change = type === 'plus' ? plusNumber : minusNumber

  if (event.button !== 0 || disabled.value) return

  change()
}

function plusNumber() {
  if (!focused.value) focus()
  changeStep('plus')
}

function minusNumber() {
  if (!focused.value) focus()
  changeStep('minus')
}

function changeStep(type: 'plus' | 'minus') {
  if (props.disabled) return

  let value = currentValue.value || 0

  const stringValue = value.toString().trim()

  if (stringValue.endsWith('.')) {
    value = toNumber(stringValue.slice(0, -1))
  }

  if (type === 'plus') {
    value = toNumber(value) + props.step
  } else {
    value = toNumber(value) - props.step
  }

  setValue(value, !props.sync ? 'change' : 'input')
}

function handleChange(event: Event) {
  const type = event.type as InputEventType
  const stringValue = (event.target as HTMLInputElement).value

  let value = stringValue.trim()

  // to rollback invalid value to empty in `<input>` when change
  if (type === 'change' && stringValue && !isValidNumber(stringValue, true)) {
    const floatValue = parseFloat(stringValue)

    if (Number.isNaN(floatValue)) {
      value = ''
    } else {
      value = floatValue.toString()
    }
  }

  inputting.value = type === 'input'

  setValue(value, type)
}

function setValue(value: string | number, type: InputEventType, sync = props.sync) {
  if (type !== 'input') {
    currentValue.value = isEmpty(value) ? getEmptyValue() : toNumber(value)
  } else {
    currentValue.value = value
  }

  setInputValue(currentValue.value)
  emitChangeEvent(type, sync)
}

function getEmptyValue() {
  switch (props.emptyType) {
    case 'undefined':
      return undefined! as number
    case 'null':
      return null! as number
    default:
      return NaN
  }
}

function emitChangeEvent(type: InputEventType, sync = props.sync) {
  type = type === 'input' ? 'input' : 'change'

  if (type === 'change') {
    const empty = isEmpty(currentValue.value)
    const value = empty ? getEmptyValue() : toNumber(currentValue.value)

    let boundValue = empty ? value : boundValueRange(toNumber(value))

    if (!empty && props.precision >= 0) {
      boundValue = toFixed(boundValue, props.precision)
    }

    // const changed = !Object.is(boundValue, value)

    if (!empty) {
      currentValue.value = boundValue
    }

    if (!sync && Object.is(lastValue, boundValue)) {
      if (!Object.is(props.value, value)) emits('update:value', boundValue)
      return
    }

    lastValue = boundValue

    if (!sync) {
      emits('update:value', boundValue)
    }
  } else {
    // console.log('input')
  }
}
</script>
