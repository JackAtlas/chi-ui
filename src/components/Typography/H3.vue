<template>
  <Title :level="3" v-bind="$props">
    <slot />
  </Title>
</template>

<script setup lang="ts">
import Title from './Title.vue'
import type { HTitleProps } from './types'

defineOptions({
  name: 'chi-h3',
})
defineProps<HTitleProps>()
</script>
