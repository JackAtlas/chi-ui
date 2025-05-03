<template>
  <ul class="chi-ul" :style="{ listStyleType: listStyle }">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import type { UnorderedListProps } from './types.ts'
defineOptions({
  name: 'chi-ul',
})
withDefaults(defineProps<UnorderedListProps>(), {
  listStyle: 'circle',
})
</script>
``
