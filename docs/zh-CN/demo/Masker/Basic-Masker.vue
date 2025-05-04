<template>
  <chi-button type="primary" @click="active = !active">打开</chi-button>
  <chi-masker closable v-model:active="active" @close="active = false"></chi-masker>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(false)
</script>
