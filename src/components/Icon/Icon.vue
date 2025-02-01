<template>
  <i class="chi-icon" :style="style">
    <g>
      <component
        :color="color"
        :is="icon"
        :stroke-width="strokeWidth"
        :default-class="defaultClass"
      />
    </g>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'
import type { IconProps } from './types'
import { toPascalCase } from '../../utils'
defineOptions({
  name: 'chi-icon',
})
const props = defineProps<IconProps>()

const icon = computed(() => icons[toPascalCase(props.name)])
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
