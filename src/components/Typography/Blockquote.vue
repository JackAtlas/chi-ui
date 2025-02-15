<template>
  <blockquote :class="classname">
    <slot />
  </blockquote>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BlockquoteProps } from './types'

defineOptions({
  name: 'chi-blockquote',
})
const props = defineProps<BlockquoteProps>()

const classname = computed(() => {
  const { type } = props
  const classname: Record<string, boolean> = {
    'chi-blockquote': true,
  }
  if (type) classname[`chi-blockquote-${type}`] = true

  return classname
})
</script>
