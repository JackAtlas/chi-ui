<template>
  <div ref="wrapper" role="tablist" tabindex="-1">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, provide, reactive, ref, toRef, watch } from 'vue'
import { COLLAPSE_STATE, type CollapseEmits, type CollapseProps, type PanelState } from './types'
import { isNull } from '../../utils'

defineOptions({
  name: 'chi-collapse',
})
const props = withDefaults(defineProps<CollapseProps>(), {
  accordion: false,
  arrowType: 'right',
})
const emits = defineEmits<CollapseEmits>()

const panelStates = reactive(new Set<PanelState>())
const currentExpanded = ref<(string | number)[]>([])

const refreshLabels = () => {
  Array.from(panelStates.values()).forEach((item, index) => {
    if (isNull(item.label)) item.label = index + 1
  })

  if (panelStates.size) {
    for (const panel of panelStates) {
      if (currentExpanded.value.includes(panel.label)) {
        panel.expanded = true
      } else if (panel.expanded) {
        expandPanel(panel.label, true)
      }
    }
  }
}

provide(
  COLLAPSE_STATE,
  reactive({
    arrowType: toRef(props, 'arrowType'),
    expandPanel,
    refreshLabels,
    registerPanel,
    unregisterPanel,
  }),
)

onMounted(() => {
  nextTick(updateItemExpanded)

  watch(currentExpanded, (prev, next) => {
    console.log(prev)
    console.log(next)
  })
})

function registerPanel(panel: PanelState) {
  panelStates.add(panel)
}

function unregisterPanel(panel: PanelState) {
  panelStates.delete(panel)
  expandPanel(panel.label, false)
  refreshLabels()
}

function expandPanel(label: string | number, expanded: boolean) {
  if (!label && label !== 0) return

  if (props.accordion) {
    currentExpanded.value = expanded ? [label] : []
  } else {
    if (expanded) {
      currentExpanded.value.push(label)
    } else {
      const index = currentExpanded.value.findIndex((item) => item === label)
      if (~index) currentExpanded.value.splice(index, 1)
    }
  }

  emitChangeEvent()
  updateItemExpanded()
}

function emitChangeEvent() {
  emits('update:expanded', currentExpanded.value)
}

function updateItemExpanded() {
  panelStates.forEach((panel) => {
    panel.setExpanded(currentExpanded.value.includes(panel.label))
  })
}
</script>
