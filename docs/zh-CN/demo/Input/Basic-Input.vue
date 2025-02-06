<template>
  <chi-input v-model:value="value" placeholder="基础用法" style="max-width: 300px"></chi-input>
  <p>Input Value: {{ value }}</p>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
