<template>
  <chi-space>
    <chi-tooltip placement="top" trigger="hover">
      <template #popper>一些提示的内容</template>
      <chi-button>悬停触发</chi-button>
    </chi-tooltip>
    <chi-tooltip placement="top" trigger="click">
      <template #popper>一些提示的内容</template>
      <chi-button>点击触发</chi-button>
    </chi-tooltip>
  </chi-space>
</template>
