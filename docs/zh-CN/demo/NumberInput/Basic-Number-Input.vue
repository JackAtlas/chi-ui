<template>
  <chi-number-input style="max-width: 300px" v-model:value="value"></chi-number-input>
  <p>Number Input Value: {{ value }}</p>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
</script>
