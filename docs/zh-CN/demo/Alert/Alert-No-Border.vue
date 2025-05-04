<template>
  <div style="max-width: 600px">
    <chi-alert no-border v-for="alertType in types" :key="alertType" :type="alertType"
      >警告提示的内容</chi-alert
    >
  </div>
</template>

<script setup>
const types = ['primary', 'info', 'success', 'warning', 'error']
</script>
