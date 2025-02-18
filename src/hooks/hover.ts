import { ref, type Ref } from 'vue'

export function useHover(wrapper: Ref<HTMLElement | null | undefined> = ref(null)) {
  const isHover = ref(false)

  wrapper.value?.addEventListener('mouseenter', enterWrapper)
  wrapper.value?.addEventListener('mouseleave', leaveWrapper)

  function enterWrapper() {
    isHover.value = true
  }

  function leaveWrapper() {
    isHover.value = false
  }

  return { isHover, wrapper }
}
