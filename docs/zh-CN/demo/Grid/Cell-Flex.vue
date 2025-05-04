<template>
  <chi-grid :cell-flex="cellFlex" :gap="8" :auto-rows="1">
    <chi-cell
      v-for="i in 6"
      :key="i"
      :width="8"
      style="background-color: var(--chi-color-primary); color: white"
    >
      {{ i }}
    </chi-cell>
    <chi-cell
      :use-flex="{ align: 'bottom', justify: 'space-evenly' }"
      :height="2"
      :width="8"
      style="background-color: var(--chi-color-primary); color: white"
    >
      <span>7</span>
      <span>7</span>
    </chi-cell>
    <chi-cell
      :use-flex="false"
      :height="2"
      :width="8"
      style="background-color: var(--chi-color-primary); color: white"
    >
      <span>7</span>
      <span>7</span>
    </chi-cell>
  </chi-grid>
</template>

<script setup>
const cellFlex = {
  align: 'middle',
  justify: 'center',
}
</script>
