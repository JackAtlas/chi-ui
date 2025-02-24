<template>
  <div class="chi-select" ref="selectRef" role="group">
    <div
      class="chi-select__selector chi-select__selector-has-suffix"
      tabindex="0"
      @click="toggleOptions"
    >
      <div class="chi-select__control" ref="controlRef">
        <span class="chi-select__placeholder">{{ placeholder }}</span>
      </div>
      <div class="chi-select__icon chi-select__suffix">
        <Icon class="chi-select__arrow" name="chevron-down"></Icon>
      </div>
    </div>
    <Transition name="chi-fade">
      <Teleport to="body">
        <div
          class="chi-select__list"
          ref="optionsRef"
          v-if="visible"
          :data-options-placement="finalPlacement"
          :style="floatingStyles"
        >
          <ul
            aria-label="options"
            aria-multiselectable="false"
            class="chi-select__options"
            v-if="options?.length"
          >
            <li
              class="chi-option"
              v-for="option in options"
              :key="typeof option === 'string' ? option : option.label"
            >
              {{ typeof option === 'string' ? option : option.value }}
            </li>
          </ul>
          <div v-else>没有东西</div>
        </div>
      </Teleport>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { flip, useFloating } from '@floating-ui/vue'
import Icon from '../Icon/Icon.vue'
import type { SelectEmits, SelectProps } from './types'
defineOptions({
  name: 'chi-select',
})
withDefaults(defineProps<SelectProps>(), {
  placeholder: '请选择',
})
defineEmits<SelectEmits>()

const selectRef = ref<HTMLElement>()
const controlRef = ref<HTMLElement>()
const optionsRef = ref<HTMLElement>()
const visible = ref(false)

const middleware = ref([flip()])
const { floatingStyles, placement: finalPlacement } = useFloating(selectRef, optionsRef, {
  middleware,
  placement: 'bottom',
})

function toggleOptions() {
  if (visible.value) {
    hideOptions()
  } else {
    showOptions()
  }
}

function showOptions() {
  visible.value = true
}

function hideOptions() {
  visible.value = false
}
</script>
