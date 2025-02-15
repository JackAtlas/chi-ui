<script setup>
const types = ['default', 'primary', 'info', 'success', 'warning', 'error']
</script>

<template>
  <div v-for="textType in types" :key="textType">
    <chi-text :type="textType">
      {{ textType.charAt(0).toLocaleUpperCase() + textType.substring(1) }}
    </chi-text>
  </div>
  <div>
    <chi-text disabled>Disabled</chi-text>
  </div>
  <div v-for="textType in types" :key="textType">
    <chi-text mark :type="textType">
      {{ `Mark ${textType.charAt(0).toLocaleUpperCase()}${textType.substring(1)}` }}
    </chi-text>
  </div>
  <div v-for="textType in types" :key="textType">
    <chi-text mark reversed :type="textType">
      {{ `Mark ${textType.charAt(0).toLocaleUpperCase()}${textType.substring(1)}` }}
    </chi-text>
  </div>
  <div>
    <chi-text code>code</chi-text>
  </div>
  <div>
    <chi-text underline>Underline</chi-text>
  </div>
  <div>
    <chi-text delete>Delete</chi-text>
  </div>
  <div>
    <chi-text strong>Strong</chi-text>
  </div>
  <div>
    <chi-text italic>Italic</chi-text>
  </div>
  <div>
    <chi-text keyboard>Keyboard</chi-text>
  </div>
</template>
