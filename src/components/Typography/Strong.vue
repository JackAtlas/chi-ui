<template>
  <Text tag="strong" v-bind="$props">
    <slot />
  </Text>
</template>

<script setup lang="ts">
import Text from './Text.vue'
defineOptions({
  name: 'chi-strong',
})
</script>
