<template>
  <button
    ref="_ref"
    class="chi-button"
    role="button"
    :class="{
      [`chi-button--block`]: block,
      [`chi-button--circle`]: circle,
      [`chi-button--dashed`]: dashed,
      [`chi-button--disabled`]: disabled,
      [`chi-button--transparent`]: transparent,
      [`chi-button--simple`]: simple,
      [`chi-button--text`]: text,
      [`chi-button--${size}`]: size,
      [`chi-button--${type}`]: type,
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :type="attrType"
  >
    <slot name="icon-before">
      <chi-icon
        class="chi-button__icon chi-button__icon-before"
        :name="iconBefore"
        v-if="iconBefore"
      ></chi-icon>
    </slot>
    <span class="chi-button__text" v-if="$slots.default">
      <slot />
    </span>
    <slot name="icon-after">
      <chi-icon
        class="chi-button__icon chi-button__icon-after"
        :name="iconAfter"
        v-if="iconAfter"
      ></chi-icon>
    </slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types.ts'
defineOptions({
  name: 'chi-button',
})
withDefaults(defineProps<ButtonProps>(), {
  attrType: 'button',
})
const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref,
})
</script>
