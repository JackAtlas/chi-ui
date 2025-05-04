<template>
  <div style="max-width: 600px">
    <chi-alert icon v-for="alertType in types" :key="alertType" :type="alertType"
      >警告提示的内容</chi-alert
    >
    <chi-alert icon title="警告标题" v-for="alertType in types" :key="alertType" :type="alertType"
      >警告提示的内容</chi-alert
    >
    <hr />
    <chi-alert :icon="Dog">警告提示的内容</chi-alert>
    <chi-alert title="警告标题" type="error" :icon="Bug">警告提示的内容</chi-alert>
  </div>
</template>

<script setup>
import { Bug, Dog } from 'lucide-vue-next'
const types = ['primary', 'info', 'success', 'warning', 'error']
</script>
