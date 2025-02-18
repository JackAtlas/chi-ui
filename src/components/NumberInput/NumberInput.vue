<template>
  <div :class="inputClassname">
    <input
      class="chi-number-input__control"
      type="text"
      :disabled="disabled"
      :id="controlId"
      :placeholder="placeholder"
    />
    <div class="chi-number-input__plus" aria-label="增加" :aria-controls="controlId">
      <Icon name="chevron-up" />
    </div>
    <div class="chi-number-input__minus" aria-label="减少" :aria-controls="controlId">
      <Icon name="chevron-down" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getGlobalCount } from '../../utils'
import type { NumberInputProps } from './types'
import Icon from '../Icon/Icon.vue'

defineOptions({
  name: 'chi-number-input',
})
const props = withDefaults(defineProps<NumberInputProps>(), {
  placeholder: '请输入数字',
  value: null,
})

const inputClassname = computed(() => {
  const { disabled, size } = props
  const classname: Record<string, boolean> = {
    'chi-number-input': true,
    'chi-number-input--disabled': disabled,
  }
  if (size) classname[`chi-number-input--${size}`] = true

  return classname
})

const idIndex = `${getGlobalCount()}`
const controlId = `chi-number-input-${idIndex}__control`

console.log(idIndex)
</script>
