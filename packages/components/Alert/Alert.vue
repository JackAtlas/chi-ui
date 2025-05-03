<template>
  <div :class="classname" v-if="!closed">
    <div class="chi-alert__icon" v-if="icon">
      <Icon :icon="alertIcon"></Icon>
    </div>
    <div class="chi-alert__wrapper">
      <div class="chi-alert__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="chi-alert__content">
        <slot></slot>
      </div>
    </div>
    <button class="chi-alert__close" type="button" v-if="closable" @click="handleClose">
      <slot name="close">
        <Icon :icon="X"></Icon>
      </slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Ban, CircleAlert, CircleCheck, CircleX, X } from 'lucide-vue-next'
import type { AlertEmits, AlertProps } from './types'
import Icon from '../Icon/Icon.vue'

defineOptions({
  name: 'chi-alert',
})

const props = defineProps<AlertProps>()
const slots = defineSlots()
const emits = defineEmits<AlertEmits>()

const closed = ref<boolean>(false)

const classname = computed(() => {
  const classname: Record<string, boolean> = {
    'chi-alert': true,
    'chi-alert-vars': true,
    'chi-alert--colorful-text': props.colorfulText,
    'chi-alert--has-icon': slots.icon || props.icon,
    'chi-alert--has-title': slots.title || props.title,
    'chi-alert--no-border': props.noBorder,
  }

  if (props.type) {
    classname[`chi-alert--${props.type}`] = true
  } else {
    classname[`chi-alert--primary`] = true
  }

  return classname
})

const alertIcon = computed(() => {
  if (typeof props.icon === 'boolean' && props.icon === true) {
    switch (props.type) {
      case 'success':
        return CircleCheck
      case 'error':
        return CircleX
      default:
        return CircleAlert
    }
  } else {
    if (props.icon) return props.icon
  }
  return Ban
})

function handleClose() {
  closed.value = true
  emits('close')
}

defineExpose({
  close: handleClose,
})
</script>
