<template>
  <div class="chi-grid" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import type { GridProps } from './types'

defineOptions({
  name: 'chi-grid',
})

const props = withDefaults(defineProps<GridProps>(), {
  columns: 24,
})

const style = computed(() => {
  const { autoColumns, autoRows, columns, gap } = props
  const style: Record<string, string> = {}

  if (typeof autoColumns === 'string') {
    style['grid-auto-columns'] = autoColumns
  } else if (typeof autoColumns === 'number') {
    style['grid-auto-columns'] = `${autoColumns}fr`
  } else if (Array.isArray(autoColumns)) {
    let acStr = ''
    autoColumns.forEach((i) => {
      if (typeof i === 'string') {
        acStr = `${acStr} ${i}`
      } else if (typeof i === 'number') {
        acStr = `${acStr} ${i}fr`
      }
    })
    style['grid-auto-columns'] = acStr.trimStart()
  }

  if (typeof autoRows === 'string') {
    style['grid-auto-rows'] = autoRows
  } else if (typeof autoRows === 'number') {
    style['grid-auto-rows'] = `${autoRows}fr`
  } else if (Array.isArray(autoRows)) {
    let arStr = ''
    autoRows.forEach((i) => {
      if (typeof i === 'string') {
        arStr = `${arStr} ${i}`
      } else if (typeof i === 'number') {
        arStr = `${arStr} ${i}fr`
      }
    })
    style['grid-auto-rows'] = arStr.trimStart()
  }

  if (typeof columns === 'string') {
    style['grid-template'] = columns
  } else if (typeof columns === 'number') {
    style['grid-template-columns'] = `repeat(${columns}, 1fr)`
  } else if (Array.isArray(columns)) {
    let gtcStr = ''
    columns.forEach((i) => {
      if (typeof i === 'string') {
        gtcStr = `${gtcStr} ${i}`
      } else if (typeof i === 'number') {
        gtcStr = `${gtcStr} ${i}fr`
      }
    })
    style['grid-template-columns'] = gtcStr.trimStart()
  }

  if (gap) {
    if (typeof gap === 'number') {
      style['gap'] = `${gap}px`
    } else if (Array.isArray(gap)) {
      style['gap'] = `${gap[0]}px ${gap[1]}px`
    }
  }

  return style
})

provide('columns', props.columns)
</script>
