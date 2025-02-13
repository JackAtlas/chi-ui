<template>
  <Title :level="2" v-bind="$props">
    <slot />
  </Title>
</template>

<script setup lang="ts">
import Title from './Title.vue'
import type { HTitleProps } from './types'

defineOptions({
  name: 'chi-h2',
})
defineProps<HTitleProps>()
</script>
