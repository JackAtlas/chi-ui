<template>
  <chi-grid :gap="[16, 24]" :columns="24">
    <chi-cell v-for="n in 12" :key="n" :width="6">
      <div class="content">width-6</div>
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
