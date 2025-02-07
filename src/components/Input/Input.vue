<template>
  <div class="chi-input-wrapper">
    <div class="chi-input__before" v-if="before && !$slots.beforeAction">{{ before }}</div>
    <div class="chi-input__before chi-input__before-action" v-if="$slots.beforeAction">
      <slot name="before-action" />
    </div>
    <div :class="className">
      <div class="chi-input__prefix-wrapper" v-if="$slots.prefix || prefix">
        <slot name="prefix" />
        <Icon class="chi-input__icon" :name="prefix" v-if="prefix && !$slots.prefix" />
      </div>
      <input
        class="chi-input__control"
        :autocomplete="autocompleteAttr"
        :disabled="disabled"
        :placeholder="placeholder"
        :spellcheck="spellcheck"
        :type="type"
        v-model="innerValue"
        @blur="handleBlur"
        @change="handleChange"
        @focus="handleFocus"
        @input="handleInput"
      />
      <div class="chi-input__suffix-wrapper" v-if="$slots.suffix || clearable || suffix">
        <slot name="suffix" />
        <div class="chi-input__icon chi-input__icon--placeholder" v-if="clearable"></div>
        <Button
          circle
          class="chi-input__icon chi-input__clear"
          icon-before="circle-x"
          v-if="showClear"
          @click="clear"
        ></Button>
        <Icon class="chi-input__icon" :name="suffix" v-if="suffix && !$slots.suffix" />
      </div>
    </div>
    <div class="chi-input__after" v-if="after && !$slots.afterAction">{{ after }}</div>
    <div class="chi-input__after chi-input__after-action" v-if="$slots.afterAction">
      <slot name="after-action" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { InputEmits, InputProps, ValueType } from './types.ts'
import Button from '../Button/Button.vue'
import Icon from '../Icon/Icon.vue'

defineOptions({
  name: 'chi-input',
})

const props = withDefaults(defineProps<InputProps>(), {
  autocomplete: false,
  spellcheck: false,
  type: 'text',
  value: '',
})

const emits = defineEmits<InputEmits>()

const innerValue = ref(props.value)
const isFocus = ref(false)

const slots = defineSlots()

const autocompleteAttr = computed(() => {
  const { autocomplete } = props

  if (typeof autocomplete === 'boolean') {
    return autocomplete ? 'on' : 'off'
  }

  return autocomplete
})

const className = computed(() => {
  const { disabled, size, type } = props
  const { prepend } = slots
  const className: Record<string, boolean> = {
    'chi-input': true,
    'chi-input--disabled': disabled,
  }
  className[`chi-input--${type}`] = true

  if (size) className[`chi-input--${size}`] = true
  if (prepend) className['is-prepend'] = true

  return className
})

const handleChange = () => {
  if (!props.sync) emits('update:value', innerValue.value)
}
const handleInput = () => {
  if (props.sync) emits('update:value', innerValue.value)
}

const handleFocus = () => {
  isFocus.value = true
}
const handleBlur = () => {
  isFocus.value = false
}
const clear = () => {
  innerValue.value = ''
  emits('update:value', '')
}

watch(
  () => props.value,
  (newValue: ValueType) => {
    innerValue.value = newValue
  },
)

const showClear = computed(() => {
  return props.clearable && !props.disabled && !!innerValue.value && isFocus.value
})
</script>
