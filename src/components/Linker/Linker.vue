<template>
  <a
    class="chi-linker"
    :class="{ [`chi-linker--${type}`]: type, [`chi-linker--disabled`]: disabled }"
  >
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
