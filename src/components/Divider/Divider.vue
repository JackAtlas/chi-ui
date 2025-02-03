<template>
  <div :class="className">
    <div class="chi-divider__text">
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

const className = computed(() => {
  const { vertical } = props
  const className = {
    'chi-divider': true,
    'chi-divider--horizontal': !vertical,
    'chi-divider--vertical': vertical,
    'chi-divider--with-text': slots.default,
  }
  return className
})
</script>
