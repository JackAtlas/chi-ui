<template>
  <Title :level="1" v-bind="$props">
    <slot />
  </Title>
</template>

<script setup lang="ts">
import Title from './Title.vue'
import type { HTitleProps } from './types'

defineOptions({
  name: 'chi-h1',
})
defineProps<HTitleProps>()
</script>
