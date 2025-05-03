<template>
  <div class="chi-space chi-space-vars" :class="className" :style="style">
    <template v-if="typeof $slots.default === 'function' && $slots.default()">
      <template v-for="(defaultContent, idx) in $slots.default()" :key="idx">
        <template v-if="Array.isArray(defaultContent.children)">
          <div
            class="chi-space__item"
            role="none"
            v-for="(c, j) in defaultContent.children"
            :key="j"
          >
            <component :is="c" />
          </div>
        </template>
        <template v-else>
          <div class="chi-space__item" role="none">
            <component :is="defaultContent" />
          </div>
        </template>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ClassType, SpaceProps } from './types.ts'

defineOptions({
  name: 'chi-space',
})

defineSlots()

const props = withDefaults(defineProps<SpaceProps>(), {
  align: 'stretch',
  justify: 'start',
})

function parseFlexStyle(value: string): string {
  return value === 'start' || value === 'end' ? `flex-${value}` : value
}

const className = computed(() => {
  const className: ClassType = {
    'chi-space--inline': props.inline,
    'chi-space--no-wrap': props.vertical || props.noWrap,
    'chi-space--vertical': props.vertical,
  }

  if (typeof props.size === 'string' && props.size !== 'default') {
    className[`chi-space--${props.size}`] = true
  }
  return className
})

const style = computed(() => {
  const { align, justify, size } = props

  const style: Record<string, string> = {
    alignItems: parseFlexStyle(align),
    justifyContent: parseFlexStyle(justify),
  }

  if (size && typeof size !== 'string') {
    const normalizedSize = Array.isArray(size) ? size : [size, size]
    style['--chi-space-v-gap'] = `${normalizedSize[0]}px`
    style['--chi-space-h-gap'] = `${normalizedSize[1]}px`
  }

  return style
})
</script>
