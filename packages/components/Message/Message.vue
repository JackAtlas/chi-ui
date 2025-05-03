<template>
  <Popup class="chi-message chi-message-vars" ref="popup" :placement="placementCenter">
    <template #item="{ item }: { item: MessageOptions }">
      <div class="chi-message__item" role="alert">
        <div class="chi-message__wrapper">
          <div class="chi-message__content">{{ item.content }}</div>
        </div>
        <button
          class="chi-message__close"
          type="button"
          v-if="item.closable"
          @click="remove(item.key!)"
        >
          <Icon label="close" name="x"></Icon>
        </button>
      </div>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { Icon } from '../Icon'
import { Popup } from '../Popup'
import type { Key, MessageConfig, MessageOptions, MessagePlacement } from './types'
defineOptions({
  name: 'chi-message',
})

const placement = ref<MessagePlacement>('top')
const popup = ref<InstanceType<typeof Popup>>()

const placementCenter = computed(() => `${placement.value}-center` as const)

async function add(options: Record<string, unknown>) {
  if (popup.value) {
    await popup.value.add(options)
  }
}

async function remove(key: Key) {
  return !!popup.value && (await popup.value.remove(key))
}

function config(config: MessageConfig) {
  placement.value = config.placement || placement.value
}

function clear() {
  if (popup.value) popup.value.clear()
}

defineExpose(reactive({ add, remove, config, clear }))
</script>
