<template>
  <ol class="chi-ol" :type="type">
    <slot />
  </ol>
</template>

<script setup lang="ts">
import type { OrderedListProps } from './types.ts'
defineOptions({
  name: 'chi-ol',
})
withDefaults(defineProps<OrderedListProps>(), {
  type: '1',
})
</script>
