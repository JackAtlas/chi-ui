<template>
  <chi-grid :auto-rows="1" :gap="8">
    <chi-cell :left="0" :right="8">
      <div class="content">width-8 左上</div>
    </chi-cell>
    <chi-cell :width="8" :left="16">
      <div class="content">width-8 右上</div>
    </chi-cell>
    <chi-cell :width="8" :top="1" :bottom="3" :right="16">
      <div class="content">width-8 上中</div>
    </chi-cell>
    <chi-cell :width="8" :top="2">
      <div class="content">width-8 左中</div>
    </chi-cell>
    <chi-cell :width="8" :top="2" :left="16">
      <div class="content">width-8 右中</div>
    </chi-cell>
    <chi-cell :height="2" :top="3">
      <div class="content">width-24</div>
    </chi-cell>
    <chi-cell :width="8" :top="5">
      <div class="content">width-8 左下</div>
    </chi-cell>
    <chi-cell :width="8" :top="5" :left="16">
      <div class="content">width-8 右下</div>
    </chi-cell>
    <chi-cell :width="16" :top="6" left="9">
      <div class="content">width-16</div>
    </chi-cell>
    <chi-cell :top="7">
      <div class="content">width-24</div>
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
