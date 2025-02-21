<template>
  <div class="chi-tooltip" ref="tooltipRef" v-on="outerEvents">
    <div class="chi-tooltip__trigger" ref="triggerRef" v-on="events">
      <slot />
    </div>
    <Transition name="chi-fade">
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
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { arrow, flip, useFloating } from '@floating-ui/vue'
import type { TooltipEmits, TooltipProps } from './types'
import useClickOutside from '../../hooks/useClickOutside'
import { debounce } from '../../utils/performance'

defineOptions({
  name: 'chi-tooltip',
})
const props = withDefaults(defineProps<TooltipProps>(), {
  closeDelay: 0,
  openDelay: 0,
  placement: 'top',
  trigger: 'hover',
})

const emits = defineEmits<TooltipEmits>()

const tooltipRef = ref<HTMLElement>()
const triggerRef = ref<HTMLElement>()
const popperRef = ref<HTMLElement>()
const arrowRef = ref<HTMLElement>()
const visible = ref<boolean>(false)

const middleware = ref([flip(), arrow({ element: arrowRef })])
const {
  floatingStyles,
  middlewareData,
  placement: finalPlacement,
} = useFloating(triggerRef, popperRef, {
  middleware,
  placement: props.placement,
})

let outerEvents: Record<string, () => void> = reactive({})
let events: Record<string, () => void> = reactive({})

const openPopper = () => {
  visible.value = true
  emits('visible-change', true)
}

const closePopper = () => {
  visible.value = false
  emits('visible-change', false)
}

const openPopperDebounced = debounce(openPopper, props.openDelay)
const closePopperDebounced = debounce(closePopper, props.closeDelay)

const openPopperFinal = () => {
  closePopperDebounced.cancel()
  openPopperDebounced()
}
const closePopperFinal = () => {
  openPopperDebounced.cancel()
  closePopperDebounced()
}

const togglePopper = () => {
  if (visible.value) {
    closePopperFinal()
  } else {
    openPopperFinal()
  }
}

const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = openPopperFinal
    outerEvents['mouseleave'] = closePopperFinal
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}

useClickOutside(tooltipRef, () => {
  if (props.trigger === 'click' && visible.value) {
    closePopperFinal()
  }
})

attachEvents()

watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      events = {}
      outerEvents = {}
      attachEvents()
    }
  },
)

defineExpose({
  tooltipRef,
  popperRef,
  triggerRef,
  show: openPopperFinal,
  hide: closePopperFinal,
})
</script>
