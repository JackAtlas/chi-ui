<template>
  <chi-number-input
    v-model:value="value"
    :min="0"
    :max="10"
    style="max-width: 300px"
  ></chi-number-input>
  <p>Number Input Value: {{ value }}</p>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
</script>
