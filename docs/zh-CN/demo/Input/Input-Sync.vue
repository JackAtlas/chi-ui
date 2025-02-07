<template>
  <p>Input Value: {{ value }}</p>
  <chi-input clearable style="max-width: 300px" sync v-model:value="value"></chi-input>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
