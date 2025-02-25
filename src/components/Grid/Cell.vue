<template>
  <div :class="className" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import type { CellFlex, CellProps } from './types'

defineOptions({
  name: 'chi-cell',
})

const columns = inject('columns')

const props = withDefaults(defineProps<CellProps>(), {
  useFlex: null,
})

const cellFlex: CellFlex = inject('cell-flex')

const className = computed(() => {
  const { useFlex } = props
  const className: Record<string, boolean> = {
    'chi-cell': true,
  }
  if (useFlex !== false) {
    if (useFlex !== null) {
      className['chi-cell--flex'] = true
      if (typeof useFlex === 'object') {
        if (useFlex.align) className[`chi-cell--${useFlex.align}`] = true
        if (useFlex.justify) className[`chi-cell--${useFlex.justify}`] = true
      } else if (useFlex === true) {
        className['chi-cell--top'] = true
        className['chi-cell--start'] = true
      }
    } else if (cellFlex !== false) {
      className['chi-cell--flex'] = true
      if (typeof cellFlex === 'object') {
        if (cellFlex.align) className[`chi-cell--${cellFlex.align}`] = true
        if (cellFlex.justify) className[`chi-cell--${cellFlex.justify}`] = true
      } else if (cellFlex === true) {
        className[`chi-cell--top`] = true
        className[`chi-cell--start`] = true
      }
    }
  }

  return className
})

const style = computed(() => {
  const { bottom, height, left, right, top, width } = props

  const style: Record<string, string> = {}

  let cNum = 0
  if (left !== undefined) cNum += 1
  if (right !== undefined) cNum += 1
  if (width !== undefined) cNum += 1

  let rNum = 0
  if (top !== undefined) rNum += 1
  if (bottom !== undefined) rNum += 1
  if (height !== undefined) rNum += 1

  if (cNum > 2 || rNum > 2) return style

  if (cNum > 1) {
    let gcArr = new Array(2)
    if (typeof left === 'number') {
      gcArr[0] = left + 1
    } else if (typeof left === 'string') {
      gcArr[0] = left
    }
    if (typeof right === 'number') {
      gcArr[1] = right + 1
    } else if (typeof right === 'string') {
      gcArr[1] = right
    }
    if (!gcArr[0]) gcArr[0] = width ? `span ${width}` : `span ${columns}`
    if (!gcArr[1]) gcArr[1] = width ? `span ${width}` : `span ${columns}`

    style['grid-column'] = gcArr.join(' / ')
  } else if (cNum === 1) {
    if (typeof left === 'number') {
      style['grid-column'] = `${left + 1} / span ${columns}`
    } else if (typeof left === 'string') {
      style['grid-column'] = `${left} / span ${columns}`
    }
    if (typeof right === 'number') {
      style['grid-column'] = `span ${columns} / ${right + 1}`
    } else if (typeof right === 'string') {
      style['grid-column'] = `span ${columns} / ${right}`
    }
    if (width) {
      style['grid-column'] = `span ${width}`
    }
  } else {
    style['grid-column'] = `span ${columns}`
  }
  if (rNum > 1) {
    let grArr = new Array(2)
    if (typeof top === 'number') {
      grArr[0] = top + 1
    } else if (typeof top === 'string') {
      grArr[0] = top
    }
    if (typeof bottom === 'number') {
      grArr[1] = bottom + 1
    } else if (typeof bottom === 'string') {
      grArr[0] = bottom
    }
    if (!grArr[0]) grArr[0] = height ? `span ${height}` : `span 1`
    if (!grArr[1]) grArr[1] = height ? `span ${height}` : `span 1`

    style['grid-row'] = grArr.join(' / ')
  } else if (rNum === 1) {
    if (typeof top === 'number') {
      style['grid-row'] = `${top + 1} / span 1`
    } else if (typeof top === 'string') {
      style['grid-row'] = `${top} / span 1`
    }
    if (typeof bottom === 'number') {
      style['grid-row'] = `span 1 / ${bottom + 1}`
    } else if (typeof bottom === 'string') {
      style['grid-row'] = `span 1 / ${bottom}`
    }
    if (height) {
      style['grid-row'] = `span ${height}`
    }
  } else {
    style['grid-row'] = 'span 1'
  }
  return style
})
</script>
