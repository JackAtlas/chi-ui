<template>
  <ol class="chi-ol" :style="{ listStyleType: listStyle }">
    <slot />
  </ol>
</template>

<script setup lang="ts">
import type { ListProps } from './types.ts'
defineOptions({
  name: 'chi-ol',
})
withDefaults(defineProps<ListProps>(), {
  listStyle: 'decimal',
})
</script>
