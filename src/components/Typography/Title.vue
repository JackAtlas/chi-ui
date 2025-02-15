<template>
  <component :class="classname" :is="tagName" :style="style">
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

const isMarkerTyped = (type: string): boolean => {
  return ['default', 'primary', 'info', 'success', 'warning', 'error'].includes(type)
}

const classname = computed(() => {
  const { aligned, marker, markerType, thin, top, type } = props
  const classname: Record<string, boolean> = {
    'chi-title': true,
    'chi-title--aligned': aligned,
    'chi-title--marker': marker,
    'chi-title--thin': thin,
    'chi-title--top': top,
  }
  if (type) {
    classname[`chi-title--${type}`] = true
  }
  if (markerType && isMarkerTyped(markerType)) {
    classname[`chi-title--marker-${markerType}`] = true
  } else if (type) {
    classname[`chi-title--marker-${type}`] = true
  }

  return classname
})

const style = computed(() => {
  const style: Record<string, string> = {}

  if (props.markerType && !isMarkerTyped(props.markerType)) {
    style['--chi-title-marker-color'] = props.markerType
  }
  return style
})
</script>
