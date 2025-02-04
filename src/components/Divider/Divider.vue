<template>
  <div :class="className">
    <div class="chi-divider__text" v-if="!vertical">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ClassType, DividerProps } from './types'

defineOptions({
  name: 'chi-divider',
})

const props = defineProps<DividerProps>()
const slots = defineSlots()

const className = computed(() => {
  const { dashed, primary, textPosition, vertical } = props
  const className: ClassType = {
    'chi-divider': true,
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
