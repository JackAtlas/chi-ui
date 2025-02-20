<template>
  <chi-number-input clearable style="max-width: 300px" v-model:value="value"></chi-number-input>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
</script>
