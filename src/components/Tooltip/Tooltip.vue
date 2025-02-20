<template>
  <div class="chi-tooltip__trigger" ref="tooltipRef" @click="togglePopper">
    <slot />
  </div>
  <Transition name="chi-fade">
    <Teleport to="body">
      <div
        class="chi-tooltip__popper"
        ref="popperRef"
        role="tooltip"
        v-if="visible"
        :data-popper-placement="finalPlacement"
        :class="{
          ['chi-tooltip__popper--light']: !reverse,
          ['chi-tooltip__popper--dark']: reverse,
        }"
        :style="floatingStyles"
      >
        <div class="chi-tooltip__tip">
          <slot name="popper" />
        </div>
        <div
          class="chi-tooltip__arrow"
          ref="arrowRef"
          :style="{
            position: 'absolute',
            left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
            top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : '',
          }"
        ></div>
      </div>
    </Teleport>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { arrow, flip, offset, useFloating } from '@floating-ui/vue'
import type { TooltipEmits, TooltipProps } from './types'
defineOptions({
  name: 'chi-tooltip',
})
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'top',
  trigger: 'hover',
})

const emits = defineEmits<TooltipEmits>()

const tooltipRef = ref<HTMLElement>()
const popperRef = ref<HTMLElement>()
const arrowRef = ref<HTMLElement>()
const visible = ref<boolean>(false)

const middleware = ref([arrow({ element: arrowRef }), flip(), offset(10)])
const {
  floatingStyles,
  middlewareData,
  placement: finalPlacement,
} = useFloating(tooltipRef, popperRef, {
  middleware,
  placement: props.placement,
})

const togglePopper = () => {
  visible.value = !visible.value
  emits('visible-change', visible.value)
}

defineExpose({
  popperRef,
  tooltipRef,
})
</script>
