<template>
  <chi-linker :icon="Upload">链接</chi-linker>
  <chi-linker type="primary" :icon="Download">链接</chi-linker>
  <chi-linker type="info" :icon="Link">链接</chi-linker>
  <chi-linker type="success" :icon="Link2">链接</chi-linker>
  <chi-linker type="warning" :icon="ExternalLink">链接</chi-linker>
  <chi-linker type="error">
    <template #icon>
      <chi-icon class="chi-linker__icon" :icon="Cable"></chi-icon>
      <!-- 添加 `class="chi-linker__icon"` 获得 3px 间距 -->
    </template>
    链接
  </chi-linker>
</template>

<script setup>
import { Cable, Download, ExternalLink, Link, Link2, Upload } from 'lucide-vue-next'
</script>
