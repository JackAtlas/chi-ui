<template>
  <component :class="classname" :is="tagname">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TextProps } from './types'

defineOptions({
  name: 'chi-text',
})
const props = defineProps<TextProps>()

const tagname = computed(() => {
  if (props.tag) {
    return props.tag
  } else if (props.code) {
    return 'code'
  } else if (props.delete) {
    return 'del'
  } else if (props.keyboard) {
    return 'kbd'
  } else {
    return 'span'
  }
})

const classname = computed(() => {
  const { code, disabled, italic, keyboard, mark, reversed, strong, thin, type, underline } = props
  const classname: Record<string, boolean> = {
    'chi-text': true,
    'chi-text-vars': true,
    'chi-text--code': code,
    'chi-text--delete': props.delete,
    'chi-text--disabled': disabled,
    'chi-text--italic': italic,
    'chi-text--keyboard': keyboard,
    'chi-text--mark': mark,
    'chi-text--reversed': reversed,
    'chi-text--strong': strong && !thin,
    'chi-text--thin': thin && !strong,
    'chi-text--underline': underline,
  }
  if (type) classname[`chi-text--${type}`] = true

  return classname
})
</script>
