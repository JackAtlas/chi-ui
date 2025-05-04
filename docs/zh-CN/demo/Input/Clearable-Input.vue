<template>
  <chi-input clearable style="max-width: 300px" v-model:value="value"></chi-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
