<template>
  <div class="chi-input-wrapper chi-input-vars" ref="wrapperNode">
    <div class="chi-input__before-action" v-if="$slots['before-action']">
      <slot name="before-action" />
    </div>
    <div class="chi-input__before" v-if="before || $slots.before">
      <slot name="before">{{ before }}</slot>
    </div>
    <div :class="className" ref="inputNode">
      <div class="chi-input__prefix-wrapper" v-if="$slots.prefix || prefix">
        <div class="chi-input__icon chi-input__prefix">
          <slot name="prefix">
            <Icon :icon="prefix" />
          </slot>
        </div>
      </div>
      <input
        class="chi-input__control"
        ref="inputControlNode"
        :autocomplete="autocompleteAttr"
        :disabled="disabled"
        :placeholder="placeholder"
        :spellcheck="spellcheck"
        :type="inputType"
        v-model="innerValue"
        @blur="handleBlur"
        @change="handleChange"
        @focus="handleFocus"
        @input="handleInput"
      />
      <div class="chi-input__suffix-wrapper" v-if="$slots.suffix || clearable || suffix || loading">
        <div class="chi-input__icon chi-input__icon--placeholder" v-if="clearable || loading"></div>
        <Button
          circle
          class="chi-input__icon chi-input__clear"
          v-if="showClear"
          :icon-before="CircleX"
          @click="clear"
        ></Button>
        <div class="chi-input__icon chi-input__loading" v-if="loading">
          <Icon effect="spin-in" :icon="LoaderCircle" />
        </div>
        <div class="chi-input__icon chi-input__suffix" v-if="suffix || $slots.suffix">
          <slot name="suffix">
            <Icon :icon="suffix" />
          </slot>
        </div>
      </div>
      <div
        class="chi-input__icon chi-input__password"
        v-if="$props.type === 'password' && !$slots.password"
        @click="togglePlain"
      >
        <Icon v-if="plain" :icon="EyeOff"></Icon>
        <Icon v-else :icon="Eye"></Icon>
      </div>
      <div class="chi-input__icon chi-input__password" v-if="$slots.password" @click="togglePlain">
        <slot name="password" :plain="plain" />
      </div>
    </div>
    <div class="chi-input__after" v-if="after || $slots.after">
      <slot name="after">{{ after }}</slot>
    </div>
    <div class="chi-input__after-action" v-if="$slots['after-action']">
      <slot name="after-action" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { CircleX, Eye, EyeOff, LoaderCircle } from 'lucide-vue-next'
import type { InputEmits, InputProps, ValueType } from './types.ts'
import Button from '../Button/Button.vue'
import Icon from '../Icon/Icon.vue'
import useClickOutside from '../../hooks/useClickOutside.ts'

defineOptions({
  name: 'chi-input',
})

const props = withDefaults(defineProps<InputProps>(), {
  autocomplete: false,
  placeholder: '请输入',
  spellcheck: false,
  type: 'text',
  value: '',
})

const emits = defineEmits<InputEmits>()

const wrapperNode = ref<HTMLElement>()
const inputNode = ref<HTMLElement>()
const inputControlNode = ref<HTMLElement>()
const innerValue = ref(props.value)
const isCursorInside = ref(false)
const isFocused = ref(false)
const plain = ref(false)

const slots = defineSlots()

const autocompleteAttr = computed(() => {
  const { autocomplete } = props

  if (typeof autocomplete === 'boolean') {
    return autocomplete ? 'on' : 'off'
  }

  return autocomplete
})

const inputType = computed(() => {
  if (props.type !== 'password') {
    return props.type
  } else {
    if (plain.value) {
      return 'text'
    } else {
      return 'password'
    }
  }
})

const className = computed(() => {
  const { after, before, disabled, loading, loadingLock, size, state, type } = props
  const { prepend } = slots
  const className: Record<string, boolean> = {
    'chi-input': true,
    'chi-input--disabled': disabled,
    'chi-input--focused': isFocused.value,
    'chi-input--readonly': loading && loadingLock,
  }
  className[`chi-input--${type}`] = true

  if (size) className[`chi-input--${size}`] = true
  if (state) className[`chi-input--${state}`] = true
  if (prepend) className['is-prepend'] = true
  if (before || slots.before) className['chi-input--before'] = true
  if (after || slots.after) className['chi-input--after'] = true
  if (slots['before-action']) className['chi-input--before-action'] = true
  if (slots['after-action']) className['chi-input--after-action'] = true

  return className
})

const handleChange = () => {
  emits('update:value', innerValue.value)
  emits('change', innerValue.value)
}
const handleInput = () => {
  if (props.sync) {
    emits('update:value', innerValue.value)
    emits('input', innerValue.value)
  }
}
const handleFocus = (e: FocusEvent) => {
  isFocused.value = true
  const { loading, loadingLock } = props
  if (loading && loadingLock) {
    inputControlNode.value?.blur()
  } else {
    emits('focus', e)
  }
}
const handleBlur = (e: FocusEvent) => {
  isFocused.value = false
  emits('blur', e)
}

const clear = () => {
  innerValue.value = ''
  emits('update:value', '')
  emits('clear')
  emits('input', '')
  emits('change', '')
}

watch(
  () => props.value,
  (newValue: ValueType) => {
    innerValue.value = newValue
  },
)

const showClear = computed(() => {
  return props.clearable && !props.disabled && !!innerValue.value && isCursorInside.value
})

const togglePlain = () => {
  plain.value = !plain.value
}
const mouseoverHandler = () => {
  isCursorInside.value = true
}
const mouseoutHandler = () => {
  isCursorInside.value = false
}
const mousedownHandler = () => {
  isFocused.value = true
}
const mouseupHandler = () => {
  isFocused.value = true
  if (!props.loadingLock) {
    inputControlNode.value?.focus()
  }
}

useClickOutside(inputNode, () => {
  isFocused.value = false
})

onMounted(() => {
  wrapperNode.value?.addEventListener('mouseover', mouseoverHandler)
  wrapperNode.value?.addEventListener('mouseleave', mouseoutHandler)
  inputNode.value?.addEventListener('mousedown', mousedownHandler)
  inputNode.value?.addEventListener('mouseup', mouseupHandler)
})
onUnmounted(() => {
  wrapperNode.value?.removeEventListener('mouseover', mouseoverHandler)
  wrapperNode.value?.removeEventListener('mouseleave', mouseoutHandler)
  inputNode.value?.removeEventListener('mousedown', mousedownHandler)
  inputNode.value?.removeEventListener('mouseup', mouseupHandler)
})
</script>
