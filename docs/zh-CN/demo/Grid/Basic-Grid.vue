<template>
  <chi-grid :gap="8">
    <chi-cell>
      <div class="content">width-24</div>
    </chi-cell>
  </chi-grid>
  <br />
  <chi-grid :columns="24" :gap="8">
    <chi-cell :width="12">
      <div class="content">width-12</div>
    </chi-cell>
    <chi-cell :width="12">
      <div class="content">width-12</div>
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
