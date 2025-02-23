<template>
  <section>
    <button ref="tab" role="tab" type="button" :id="tabId" @click="handleToggle()">
      <slot name="title">{{ title }}</slot>
    </button>
    <div
      class="chi-collapse-panel__body"
      role="tab-panel"
      tabindex="0"
      v-if="currentExpanded"
      :aria-labelledby="tabId"
      :id="bodyId"
    >
      <div class="chi-collapse-panel__content">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { COLLAPSE_STATE, type PanelEmits, type PanelProps, type PanelState } from './types'
import { getIndexId } from '.'

defineOptions({
  name: 'chi-collapse-panel',
})
const props = defineProps<PanelProps>()
const emits = defineEmits<PanelEmits>()

const id = getIndexId()
const tabId = `chi-collapse__panel-tab-${id}`
const bodyId = `chi-collapse__panel-body-${id}`

// if collapseState does not exists, then panel is independent
// 如果 collapseState 不存在，则该 panel 是独立使用的
const collapseState = inject(COLLAPSE_STATE, null)

const currentExpanded = ref(props.expanded)
const currentLabel = ref(props.label || `panel-label-${id}`)
const tab = ref<HTMLElement>()

if (collapseState) {
  const state: PanelState = reactive({
    tab,
    label: currentLabel,
    expanded: currentExpanded,
    setExpanded,
  })

  watch(
    () => props.label,
    (value: string | number | undefined) => {
      const prevValue = currentLabel.value
      currentLabel.value = value || value === 0 ? value : prevValue
    },
  )

  collapseState.registerPanel(state)

  onBeforeUnmount(() => {
    collapseState.unregisterPanel(state)
  })
} else {
  watch(
    () => props.expanded,
    (value) => {
      currentExpanded.value = value
    },
  )
}

function setExpanded(expanded: boolean) {
  currentExpanded.value = expanded

  emits('update:expanded', expanded)
}

function handleToggle(expanded = !currentExpanded.value) {
  if (props.disabled) return

  if (collapseState) {
    collapseState.expandPanel(currentLabel.value, expanded)
  } else {
    setExpanded(expanded)
  }
}
</script>
