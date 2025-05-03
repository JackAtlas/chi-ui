<template>
  <i class="chi-icon" :class="effectClass" :style="style" v-if="icon || $slots.default">
    <g>
      <slot>
        <component :color="color" :is="icon" :stroke-width="strokeWidth" />
      </slot>
    </g>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from './types'
defineOptions({
  name: 'chi-icon',
})
const props = defineProps<IconProps>()

const effectClass = computed(() => {
  if (props.effect === 'spin-in') return 'chi-icon--spin-in'
  if (props.effect === 'spin-out') return 'chi-icon--spin-out'
  return null
})

const style = computed(() => {
  if (props.scale) {
    return {
      fontSize: `${props.scale}em`,
    }
  } else if (props.size) {
    return {
      fontSize: props.size,
    }
  } else {
    return {}
  }
})
</script>
