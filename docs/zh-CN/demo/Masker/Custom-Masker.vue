<script setup>
import { ref } from 'vue'

const active = ref(false)
</script>

<template>
  <chi-button type="primary" @click="active = !active"> 打开 </chi-button>
  <chi-masker v-model:active="active" transfer closable @close="active = false">
    <template #mask>
      <svg style="width: 100%; height: 100%">
        <defs>
          <mask id="custom-mask-zh">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <rect x="0" y="0" width="310" height="64" fill="black" />
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="rgba(0, 0, 0, 45%)"
          mask="url(#custom-mask-zh)"
        />
      </svg>
    </template>
  </chi-masker>
</template>
