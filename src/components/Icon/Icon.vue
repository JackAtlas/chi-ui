<template>
  <i class="chi-icon" :style="{ [`font-size: ${scale}em`]: scale }">
    <g>
      <component
        :color="color"
        :is="icon"
        :size="size"
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
</script>
