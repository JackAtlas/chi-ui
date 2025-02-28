<template>
  <chi-space vertical>
    <chi-input before="https://" placeholder="chi-ui">
      <template #after>.com</template>
    </chi-input>
    <chi-input placeholder="chi-ui">
      <template #after-action>
        <chi-button type="primary" :icon-before="Search">搜索</chi-button>
      </template>
    </chi-input>
    <chi-input placeholder="chi-ui">
      <template #before-action>
        <chi-button>Before</chi-button>
      </template>
      <template #after-action>
        <chi-button>After</chi-button>
      </template>
    </chi-input>
  </chi-space>
</template>

<script setup>
import { Search } from 'lucide-vue-next'
</script>
