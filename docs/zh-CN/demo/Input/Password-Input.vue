<template>
  <chi-input type="password" plain-password style="max-width: 300px"></chi-input>
  <br />
  <br />
  <chi-input type="password" plain-password clearable style="max-width: 300px">
    <template #password="{ plain }">
      <chi-icon v-if="plain" :icon="Laugh"></chi-icon>
      <chi-icon v-else :icon="Frown"></chi-icon>
    </template>
  </chi-input>
</template>

<script setup>
import { Frown, Laugh } from 'lucide-vue-next'
</script>
