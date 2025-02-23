<template>
  <chi-collapse style="max-width: 500px" v-model:expanded="expanded">
    <chi-collapse-panel title="面板一">
      <chi-input></chi-input>
      <p>一些内容一些内容一些内容</p>
      <p>一些内容一些内容一些内容</p>
    </chi-collapse-panel>
    <chi-collapse-panel title="面板二">
      <p>一些内容一些内容一些内容</p>
      <p>一些内容一些内容一些内容</p>
    </chi-collapse-panel>
    <chi-collapse-panel title="面板三">
      <p>一些内容一些内容一些内容</p>
      <p>一些内容一些内容一些内容</p>
    </chi-collapse-panel>
  </chi-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const expanded = ref(1)
</script>
