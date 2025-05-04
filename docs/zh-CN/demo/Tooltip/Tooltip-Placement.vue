<template>
  <chi-space
    style="max-width: 500px; margin: 10px 0"
    v-for="(meta, index) in tooltipMeta"
    :justify="meta.justify"
    :key="index"
  >
    <template v-for="placement in meta.placements" :key="placement">
      <chi-tooltip reverse :placement="placement" trigger="click">
        <span style="padding: 0 5px">
          <chi-button style="max-width: 120px">{{ placement }}</chi-button>
        </span>
        <template #popper>{{ `The ${placement.split('-').join(' ')} text` }}</template>
      </chi-tooltip>
    </template>
  </chi-space>
</template>

<script setup>
const tooltipMeta = [
  { justify: 'center', placements: ['top-start', 'top', 'top-end'] },
  { justify: 'space-between', placements: ['left-start', 'right-start'] },
  { justify: 'space-between', placements: ['left', 'right'] },
  { justify: 'space-between', placements: ['left-end', 'right-end'] },
  { justify: 'center', placements: ['bottom-start', 'bottom', 'bottom-end'] },
]
</script>
