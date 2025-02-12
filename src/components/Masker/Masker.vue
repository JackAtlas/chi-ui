<template>
  <Teleport :to="toNode" v-if="transfer">
    <Transition name="chi-fade">
      <div class="chi-masker" v-if="innerActive" @click="handleClose">
        <div class="chi-masker__mask">
          <slot name="mask" />
          <div class="chi-masker__mask-inner" v-if="!$slots.mask"></div>
        </div>
        <div class="chi-masker__content">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
  <template v-else>
    <Transition name="chi-fade">
      <div class="chi-masker" v-if="innerActive" @click="handleClose">
        <div class="chi-masker__mask">
          <slot name="mask" />
          <div class="chi-masker__mask-inner" v-if="!$slots.mask"></div>
        </div>
        <div class="chi-masker__content">
          <slot />
        </div>
      </div>
    </Transition>
  </template>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { MaskerEmits, MaskerProps } from './types'

defineOptions({
  name: 'chi-masker',
})
const props = defineProps<MaskerProps>()

const innerActive = ref(props.active)

const toNode = computed(() => {
  if (typeof props.transfer === 'string') {
    return props.transfer
  } else {
    return 'body'
  }
})

watch(
  () => props.active,
  (newValue: boolean) => {
    innerActive.value = newValue
  },
)

const emits = defineEmits<MaskerEmits>()

const handleClose = () => {
  if (props.closable) {
    innerActive.value = false
    emits('close')
  }
}
</script>
