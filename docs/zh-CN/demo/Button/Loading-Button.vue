<template>
  <chi-button loading type="primary">加载中</chi-button>
  <chi-button type="primary" :loading="loading" @click="load">点一下我</chi-button>
  <chi-button loading circle type="primary">加载中</chi-button>
  <chi-button loading circle type="primary"></chi-button>
  <chi-button loading circle>
    <template #loader>
      <chi-icon effect="spin-out" name="loader-circle"></chi-icon>
    </template>
  </chi-button>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

function load() {
  loading.value = true

  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>
