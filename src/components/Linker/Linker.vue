<template>
  <a
    class="chi-linker chi-linker-vars"
    :class="{
      [`chi-linker--${type}`]: type,
      [`chi-linker--disabled`]: disabled,
      [`chi-linker--underline`]: underline,
    }"
  >
    <slot name="icon">
      <chi-icon class="chi-linker__icon" :icon="icon"></chi-icon>
    </slot>
    <slot />
  </a>
</template>

<script setup lang="ts">
import type { LinkerProps } from './types.ts'
defineOptions({
  name: 'chi-linker',
})
defineProps<LinkerProps>()
</script>
