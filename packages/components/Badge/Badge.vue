<template>
  <div
    class="chi-badge chi-badge-vars"
    :class="{ ['chi-badge--is-dot']: isDot, ['chi-badge--not-wrapper']: !$slots.default }"
    @click="handleClick"
  >
    <slot />
    <sup :class="contentClassname" :title="content?.toString()">{{ displayContent }}</sup>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BadgeEmits, BadgeProps } from './types.ts'
defineOptions({
  name: 'chi-badge',
})

const slots = defineSlots()
const props = defineProps<BadgeProps>()

const contentClassname = computed(() => {
  const { type } = props
  const classname: Record<string, boolean> = {
    'chi-badge__content': true,
  }
  if (type) classname[`chi-badge__content--${type}`] = true
  if (slots.default) classname['chi-badge__content--fixed'] = true
  return classname
})

const displayContent = computed(() => {
  const { content, isDot, max } = props
  if (isDot) return null
  if (typeof content === 'number' && typeof max === 'number' && content > max) {
    return `${max}+`
  } else {
    return content
  }
})

const emits = defineEmits<BadgeEmits>()

const handleClick = () => {
  emits('badge-click')
}
</script>
