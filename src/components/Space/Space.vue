<template>
  <div
    class="chi-space"
    :class="{ [`chi-space--vertical chi-space--no-wrap`]: vertical }"
    :style="style"
  >
    <template v-if="vertical && $slots.default">
      <div class="chi-space__item" role="none" v-for="c in $slots.default({})" :key="c.name">
        <component :is="c" />
      </div>
    </template>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import type { SpaceProps } from './types.ts'

defineOptions({
  name: 'chi-space',
})

const props = withDefaults(defineProps<SpaceProps>(), {
  align: 'stretch',
  justify: 'start',
})

function parseFlexStyle(value: string): string {
  return value === 'start' || value === 'end' ? `flex-${value}` : value
}

const style = computed(() => {
  const { align, justify } = props

  const style: Record<string, string> = {
    alignItems: parseFlexStyle(align),
    justifyContent: parseFlexStyle(justify),
  }

  return style
})
</script>
