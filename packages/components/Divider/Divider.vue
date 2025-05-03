<template>
  <div role="separator" :class="className" :style="style">
    <div class="chi-divider__text" v-if="!vertical">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DividerProps } from './types'

defineOptions({
  name: 'chi-divider',
})

const props = defineProps<DividerProps>()
const slots = defineSlots()

const style = computed(() => {
  const style: Record<string, string> = {}
  if (props.margin) {
    if (props.vertical) {
      if (typeof props.margin === 'string') {
        style['margin-left'] = props.margin
        style['margin-right'] = props.margin
      } else if (typeof props.margin === 'number') {
        style['margin-left'] = props.margin + 'px'
        style['margin-right'] = props.margin + 'px'
      }
    } else {
      if (typeof props.margin === 'string') {
        style['margin-top'] = props.margin
        style['margin-bottom'] = props.margin
      } else if (typeof props.margin === 'number') {
        style['margin-top'] = props.margin + 'px'
        style['margin-bottom'] = props.margin + 'px'
      }
    }
  }
  return style
})

const className = computed(() => {
  const { dashed, primary, textPosition, vertical } = props
  const className: Record<string, boolean> = {
    'chi-divider': true,
    'chi-divider-vars': true,
    'chi-divider--dashed': dashed,
  }
  if (vertical) {
    className['chi-divider--vertical'] = true
  } else {
    className['chi-divider--horizontal'] = true
    if (slots['default']) {
      className['chi-divider--with-text'] = true
      if (primary) className['chi-divider--primary'] = true
      if (textPosition === 'left') className['chi-divider--with-text-left'] = true
      if (textPosition === 'right') className['chi-divider--with-text-right'] = true
    }
  }
  return className
})
</script>
