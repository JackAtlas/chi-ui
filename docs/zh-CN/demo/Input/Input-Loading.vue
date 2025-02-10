<template>
  <chi-input placeholder="加载中可以编辑" :loading="loading"></chi-input>
  <br />
  <br />
  <chi-input loading-lock placeholder="加载中不可编辑" :loading="loading"></chi-input>
  <br />
  <br />
  Loading: {{ loading }}
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)
</script>
