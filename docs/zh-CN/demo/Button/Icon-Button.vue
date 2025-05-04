<template>
  <chi-button type="primary" :icon-before="Search">搜索</chi-button>
  <chi-button type="primary" :icon-before="Search"></chi-button>
  <chi-button type="primary" :icon-before="Search" circle>搜索</chi-button>
  <chi-button type="primary" :icon-before="Search" circle></chi-button>
  <chi-button :icon-before="ArrowLeftToLine" :icon-after="ArrowRightToLine">扩展</chi-button>
</template>

<script setup>
import { ArrowLeftToLine, ArrowRightToLine, Search } from 'lucide-vue-next'
</script>
