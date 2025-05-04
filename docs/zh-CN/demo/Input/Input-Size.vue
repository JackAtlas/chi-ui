<template>
  <chi-input
    size="small"
    placeholder="Small size"
    style="max-width: 300px"
    :prefix="User"
  ></chi-input>
  <br />
  <br />
  <chi-input placeholder="Medium size" style="max-width: 300px" :prefix="User"></chi-input>
  <br />
  <br />
  <chi-input
    size="large"
    placeholder="Large size"
    style="max-width: 300px"
    :prefix="User"
  ></chi-input>
</template>

<script setup>
import { User } from 'lucide-vue-next'
</script>
