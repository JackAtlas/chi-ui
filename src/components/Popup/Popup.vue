<template>
  <div class="chi-popup">
    <PopupItem v-for="item in items" :key="item.key" :state="item" :style="getItemStyle(item)">
      <template #default="{ item: itemData }">
        <slot name="item" :item="itemData"></slot>
      </template>
    </PopupItem>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, reactive, ref, watch, type CSSProperties } from 'vue'
import PopupItem from './PopupItem.vue'
import { DELETE_HANDLER } from './types'
import type { Key, PopupItemState, PopupProps } from './types'
import { getGlobalCount } from '../../utils'
defineOptions({
  name: 'chi-popup',
})

const props = withDefaults(defineProps<PopupProps>(), {
  itemOffset: 16,
  placement: 'top-right',
  startOffset: 30,
})

type QueueState =
  | {
      type: 'add'
      param: Record<string, unknown>
    }
  | {
      type: 'clear'
      param: Key
    }

const items = ref<PopupItemState[]>([])
const queue: QueueState[] = []

let pending = false

const placementArray = computed(() => {
  return props.placement.split('-') as ['top' | 'bottom', 'right' | 'center' | 'left']
})

watch(
  () => props.startOffset,
  (value, prevValue) => {
    items.value.forEach((item) => {
      item.verticalPosition += value - prevValue
    })
  },
)

provide(DELETE_HANDLER, deleteItem)

defineExpose({
  items,
  add,
  remove,
  has,
  find,
  clear,
})

function getItemStyle(item: PopupItemState) {
  const [verticalStyle, horizontalStyle] = placementArray.value
  const style: CSSProperties = { [verticalStyle]: `${item.verticalPosition}px` }
  if (horizontalStyle === 'center') {
    style.left = '50%'
    style.transform = 'translateX(-50%)'
  } else {
    style[horizontalStyle] = '24px'
  }

  const zIndex = parseInt(item.zIndex as string)

  if (!Number.isNaN(zIndex)) {
    style.zIndex = zIndex
  }

  return style
}

function add(options: Record<string, unknown>) {
  return new Promise<Key>((resolve) => {
    const onOpen = typeof options.onOpen === 'function' ? options.onOpen : () => {}

    options.onOpen = (key: Key) => {
      resolve(key)
      onOpen()
    }

    queue.push({
      type: 'add',
      param: options,
    })

    if (!pending) {
      pending = true
      queueOut()
    }
  })
}

function remove(key: Key) {
  return new Promise<boolean>((resolve) => {
    const item = find(key)
    if (!item) return resolve(false)

    const onClose = typeof item.onClose === 'function' ? item.onClose : () => {}

    item.onClose = (result: boolean) => {
      resolve(result)
      onClose(result)
    }

    queue.push({
      type: 'clear',
      param: key,
    })

    if (!pending) {
      pending = true
      queueOut()
    }
  })
}

function queueOut() {
  if (queue.length) {
    const state = queue.shift()!

    if (state.type === 'add') {
      renderItem(state.param)
    } else {
      removeItem(state.param)
    }

    requestAnimationFrame(queueOut)
  } else {
    pending = false
  }
}

function renderItem(options: Record<string, unknown>) {
  let item = options.key ? find(options.key as Key) : null

  if (!item?.visible) {
    const index = getGlobalCount()
    const key = (options.key as Key) ?? `chi-popup-${index}`

    let currentVertical = props.startOffset

    items.value.forEach((existingItem) => {
      if (existingItem.visible) {
        currentVertical += existingItem.height + props.itemOffset
      }
    })

    item = reactive(
      Object.assign(
        {
          key,
          content: '',
          closable: false,
          onOpen: () => {},
          onClose: () => {},
        },
        options,
        { height: 0, visible: true, verticalPosition: currentVertical },
      ),
    )

    items.value.push(item)
  }

  if (typeof options.onOpen === 'function') options.onOpen(item.key)
}

function removeItem(key: Key) {
  const index = items.value.findIndex((item) => item.key === key)

  if (~index) {
    const item = items.value[index]
    const removeHeight = item.height

    item.visible = false

    for (let i = index + 1, len = items.value.length; i < len; ++i) {
      items.value[i].verticalPosition -= removeHeight + props.itemOffset
    }

    if (typeof item.onClose === 'function') item.onClose(true)
  }
}

function deleteItem(key: Key) {
  const index = items.value.findIndex((item) => item.key === key)

  if (~index) items.value.splice(index, 1)
}

function has(key: Key) {
  return !~items.value.findIndex((item) => item.key === key)
}

function find(key: Key) {
  return items.value.find((item) => item.key === key)
}

function clear() {
  queue.length = 0
  items.value = []
}
</script>
