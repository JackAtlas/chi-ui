<template>
  <Title :level="6" v-bind="$props">
    <slot />
  </Title>
</template>

<script setup lang="ts">
import Title from './Title.vue'
import type { HTitleProps } from './types'

defineOptions({
  name: 'chi-h6',
})
defineProps<HTitleProps>()
</script>
