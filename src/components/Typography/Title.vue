<template>
  <component :class="classname" :is="tagName">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TitleProps } from './types.ts'
defineOptions({
  name: 'chi-title',
})
const props = withDefaults(defineProps<TitleProps>(), {
  level: 5,
})

const tagName = computed(() => {
  switch (props.level) {
    case 1:
      return 'h1'
    case 2:
      return 'h2'
    case 3:
      return 'h3'
    case 4:
      return 'h4'
    case 5:
      return 'h5'
    case 6:
      return 'h6'
    default:
      return 'h5'
  }
})

const classname = computed(() => {
  const { thin, top, type } = props
  const classname: Record<string, boolean> = {
    'chi-title': true,
  }
  if (top) classname['chi-title--top'] = true
  if (thin) classname['chi-title--thin'] = true
  if (type) {
    classname[`chi-title--${type}`] = true
    classname[`chi-title--marker-${type}`] = true
  }

  return classname
})
</script>
