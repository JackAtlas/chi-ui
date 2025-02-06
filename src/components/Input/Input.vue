<template>
  <div class="chi-input-wrapper">
    <div class="chi-input__before" v-if="before && !$slots.beforeAction">{{ before }}</div>
    <div class="chi-input__before chi-input__before-action" v-if="$slots.beforeAction">
      <slot name="before-action" />
    </div>
    <div :class="className">
      <div class="chi-input__prefix-wrapper" v-if="$slots.prefix">
        <slot name="prefix" />
      </div>
      <input
        class="chi-input__control"
        :autocomplete="autocompleteAttr"
        :disabled="disabled"
        :placeholder="placeholder"
        :spellcheck="spellcheck"
        :type="type"
        v-model="innerValue"
        @input="handleInput"
      />
      <div class="chi-input__suffix-wrapper" v-if="$slots.suffix">
        <slot name="suffix" />
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
const handleInput = () => {
  emits('update:value', innerValue.value)
}

watch(
  () => props.value,
  (newValue: ValueType) => {
    innerValue.value = newValue
  },
)
</script>
