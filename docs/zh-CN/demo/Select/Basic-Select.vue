<template>
  <p>当前值：{{ value }}</p>
  <chi-select style="max-width: 400px" v-model:value="value" :options="options"></chi-select>
  <br />
  <br />
  <chi-select placeholder="空选项" style="max-width: 400px"></chi-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<number>()

const options = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 },
]
</script>
