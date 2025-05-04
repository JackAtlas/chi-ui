<template>
  <chi-space>
    <chi-tooltip :open-delay="1000">
      <template #popper>一些提示的内容</template>
      <chi-button>延迟出现</chi-button>
    </chi-tooltip>
    <chi-tooltip :close-delay="1000">
      <template #popper>一些提示的内容</template>
      <chi-button>延迟消失</chi-button>
    </chi-tooltip>
  </chi-space>
</template>
