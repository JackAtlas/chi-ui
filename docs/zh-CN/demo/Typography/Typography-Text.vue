<script setup>
const types = ['default', 'primary', 'info', 'success', 'warning', 'error']
</script>

<template>
  <chi-space vertical>
    <chi-text v-for="textType in types" :key="textType" :type="textType">
      {{ textType.charAt(0).toLocaleUpperCase() + textType.substring(1) }}
    </chi-text>
    <chi-text disabled>Disabled</chi-text>
    <div v-for="textType in types" :key="textType">
      <chi-text mark :type="textType">
        {{ `Mark ${textType.charAt(0).toLocaleUpperCase()}${textType.substring(1)}` }}
      </chi-text>
    </div>
    <chi-text mark reversed v-for="textType in types" :key="textType" :type="textType">
      {{ `Mark ${textType.charAt(0).toLocaleUpperCase()}${textType.substring(1)}` }}
    </chi-text>
    <chi-text code>code</chi-text>
    <chi-text underline>Underline</chi-text>
    <chi-text delete>Delete</chi-text>
    <chi-text strong>Strong</chi-text>
    <chi-text italic>Italic</chi-text>
    <chi-text keyboard>Keyboard</chi-text>
  </chi-space>
</template>
