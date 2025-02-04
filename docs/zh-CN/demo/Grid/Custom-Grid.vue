<template>
  <chi-grid :gap="8" :columns="['300px', 'repeat(2, 1fr)']">
    <chi-cell :width="1" :height="2">
      <div class="content">width-1(300px), height-2</div>
    </chi-cell>
    <chi-cell :width="2" :height="1">
      <div class="content">width-2, height-1</div>
    </chi-cell>
    <chi-cell v-for="n in 2" :key="n" :width="1">
      <div class="content">width-1(1fr)</div>
    </chi-cell>
  </chi-grid>
</template>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 48px;
  background-color: var(--chi-color-primary);
  border-radius: var(--chi-radius-base);
  color: #fff;
}
</style>
