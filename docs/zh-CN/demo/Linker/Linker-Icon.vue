<template>
  <chi-linker icon="upload">链接</chi-linker>
  <chi-linker icon="download" type="primary">链接</chi-linker>
  <chi-linker icon="link" type="info">链接</chi-linker>
  <chi-linker icon="link-2" type="success">链接</chi-linker>
  <chi-linker icon="external-link" type="warning">链接</chi-linker>
  <chi-linker type="error">
    <template #icon>
      <chi-icon class="chi-linker__icon" name="cable"></chi-icon>
      <!-- 添加 `class="chi-linker__icon"` 获得 3px 间距 -->
    </template>
    链接
  </chi-linker>
</template>
