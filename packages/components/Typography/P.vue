<template>
  <Text tag="p" v-bind="$props">
    <slot />
  </Text>
</template>

<script setup lang="ts">
import Text from './Text.vue'
defineOptions({
  name: 'chi-p',
})
</script>
