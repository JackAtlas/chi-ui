<template>
  <ul class="chi-ul" :style="{ listStyleType: listStyle }">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import type { ListProps } from './types.ts'
defineOptions({
  name: 'chi-ul',
})
withDefaults(defineProps<ListProps>(), {
  listStyle: 'circle',
})
</script>
``
