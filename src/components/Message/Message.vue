<template>
  <div class="chi-message" role="alert">
    <div class="chi-message__list">
      <div class="chi-message__item">
        <div class="chi-message__inner">
          <div class="chi-message__icon">
            <Icon name="info"></Icon>
          </div>
          <div class="chi-message__content"></div>
        </div>
        <button type="button" class="chi-message__close">
          <Icon name="x"></Icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'chi-message',
})
</script>
