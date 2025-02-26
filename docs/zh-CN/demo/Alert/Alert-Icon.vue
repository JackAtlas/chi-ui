<template>
  <div style="max-width: 600px">
    <chi-alert icon v-for="alertType in types" :key="alertType" :type="alertType"
      >警告提示的内容</chi-alert
    >
    <chi-alert icon title="警告标题" v-for="alertType in types" :key="alertType" :type="alertType"
      >警告提示的内容</chi-alert
    >
    <hr />
    <chi-alert icon="dog">警告提示的内容</chi-alert>
    <chi-alert icon="bug" title="警告标题" type="error">警告提示的内容</chi-alert>
  </div>
</template>

<script setup>
const types = ['primary', 'info', 'success', 'warning', 'error']
</script>
