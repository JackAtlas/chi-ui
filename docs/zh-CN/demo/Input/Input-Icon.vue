<template>
  <chi-input placeholder="前置图标" style="max-width: 300px" :prefix="User"></chi-input>
  <br />
  <br />
  <chi-input placeholder="后置图标" clearable style="max-width: 300px" :suffix="Search"></chi-input>
</template>

<script setup>
import { Search, User } from 'lucide-vue-next'
</script>
