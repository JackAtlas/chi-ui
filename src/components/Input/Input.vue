<template>
  <div class="chi-input-wrapper" ref="wrapperNode">
    <div class="chi-input__before-action" v-if="$slots['before-action']">
      <slot name="before-action" />
    </div>
    <div class="chi-input__before" v-if="before && !$slots.before">{{ before }}</div>
    <div class="chi-input__before" v-if="$slots.before">
      <slot name="before" />
    </div>
    <div :class="className">
      <div class="chi-input__prefix-wrapper" v-if="$slots.prefix || prefix">
        <slot name="prefix" />
        <div class="chi-input__icon chi-input__prefix">
          <Icon :name="prefix" v-if="prefix && !$slots.prefix" />
        </div>
      </div>
      <input
        class="chi-input__control"
        :autocomplete="autocompleteAttr"
        :disabled="disabled"
        :placeholder="placeholder"
        :spellcheck="spellcheck"
        :type="type"
        v-model="innerValue"
        @change="handleChange"
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
        <div class="chi-input__icon chi-input__suffix">
          <Icon class="chi-input__icon" :name="suffix" v-if="suffix && !$slots.suffix" />
        </div>
      </div>
    </div>
    <div class="chi-input__after" v-if="after && !$slots.after">{{ after }}</div>
    <div class="chi-input__after" v-if="$slots.after">
      <slot name="after" />
    </div>
    <div class="chi-input__after-action" v-if="$slots['after-action']">
      <slot name="after-action" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
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

const wrapperNode = ref<HTMLElement>()
const innerValue = ref(props.value)
const isCursorInside = ref(false)

const slots = defineSlots()

const autocompleteAttr = computed(() => {
  const { autocomplete } = props

  if (typeof autocomplete === 'boolean') {
    return autocomplete ? 'on' : 'off'
  }

  return autocomplete
})

const className = computed(() => {
  const { after, before, disabled, size, type } = props
  const { prepend } = slots
  const className: Record<string, boolean> = {
    'chi-input': true,
    'chi-input--disabled': disabled,
  }
  className[`chi-input--${type}`] = true

  if (size) className[`chi-input--${size}`] = true
  if (prepend) className['is-prepend'] = true
  if (before || slots.before) className['chi-input--before'] = true
  if (after || slots.after) className['chi-input--after'] = true
  if (slots['before-action']) className['chi-input--before-action'] = true
  if (slots['after-action']) className['chi-input--after-action'] = true

  return className
})

const handleChange = () => {
  emits('update:value', innerValue.value)
}
const handleInput = () => {
  if (props.sync) emits('update:value', innerValue.value)
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
  return props.clearable && !props.disabled && !!innerValue.value && isCursorInside.value
})

const mouseoverHandler = () => {
  isCursorInside.value = true
}
const mouseoutHandler = () => {
  isCursorInside.value = false
}

onMounted(() => {
  wrapperNode.value?.addEventListener('mouseover', mouseoverHandler)
  wrapperNode.value?.addEventListener('mouseleave', mouseoutHandler)
})
onUnmounted(() => {
  wrapperNode.value?.removeEventListener('mouseover', mouseoverHandler)
  wrapperNode.value?.removeEventListener('mouseleave', mouseoutHandler)
})
</script>
