<template>
  <Transition appear @after-leave="handleDelete(state.key)">
    <div class="chi-popup__item" ref="wrapper" v-show="state.visible" :chi-index="state.key">
      <div class="chi-popup__item-inner">
        <slot :item="state">{{ state.content }}</slot>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { inject, nextTick, onMounted, ref, type PropType } from 'vue'
import { DELETE_HANDLER, type PopupItemState } from './types'

defineOptions({
  name: 'chi-popup-item',
})
const props = defineProps({
  state: {
    type: Object as PropType<PopupItemState>,
    default: () => ({}),
  },
})
const handleDelete = inject(DELETE_HANDLER, () => {})
const wrapper = ref<HTMLElement>()

onMounted(() => {
  nextTick(() => {
    const state = props.state

    if (state && wrapper.value) {
      state.height = wrapper.value.offsetHeight
    }
  })
})
</script>
