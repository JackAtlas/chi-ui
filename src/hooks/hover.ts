import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

export function useHover(wrapper: Ref<HTMLElement | null | undefined> = ref(null)) {
  const isHover = ref(false)

  onMounted(() => {
    wrapper.value?.addEventListener('mouseenter', enterWrapper)
    wrapper.value?.addEventListener('mouseleave', leaveWrapper)
  })

  onBeforeUnmount(() => {
    wrapper.value?.removeEventListener('mouseenter', enterWrapper)
    wrapper.value?.removeEventListener('mouseleave', leaveWrapper)
  })

  function enterWrapper() {
    isHover.value = true
  }

  function leaveWrapper() {
    isHover.value = false
  }

  return { isHover, wrapper }
}
