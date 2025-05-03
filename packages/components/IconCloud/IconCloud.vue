<template>
  <canvas
    ref="canvasRef"
    role="img"
    :height="height"
    :width="width"
    :aria-label="ariaLabel"
  ></canvas>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref, watchEffect } from 'vue'
import type { IconCloudProps, SphereIcon } from './types'

defineOptions({
  name: 'chi-icon-cloud',
})
const props = withDefaults(defineProps<IconCloudProps>(), {
  height: 300,
  width: 300,
})

const { images } = props

const canvasRef = ref<HTMLCanvasElement | null>(null)
const animationFrameRef = ref<number>(0)

const imageCanvasesRef = ref<HTMLCanvasElement[]>([])
const imagesLoadedRef = ref<boolean[]>([])

const imagePositions = ref<SphereIcon[]>([])

const rotation = reactive({ x: 0, y: 0 })
const isDragging = ref(false)
const mousePos = reactive({ x: 0, y: 0 })

const targetRotation = ref<{
  x: number
  y: number
  startX: number
  startY: number
  distance: number
  startTime: number
  duration: number
} | null>(null)

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3
}

watchEffect(() => {
  if (!images) return
  imagesLoadedRef.value = new Array(images.length).fill(false)

  const newImageCanvases = images.map((url, idx) => {
    const offscreen = document.createElement('canvas')
    offscreen.width = 40
    offscreen.height = 40
    const offCtx = offscreen.getContext('2d')
    if (!offCtx) return offscreen

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = url
    img.onload = () => {
      offCtx.clearRect(0, 0, offscreen.width, offscreen.height)

      offCtx.beginPath()
      offCtx.arc(20, 20, 20, 0, Math.PI * 2)
      offCtx.closePath()
      offCtx.clip()

      offCtx.drawImage(img, 0, 0, 40, 40)
      imagesLoadedRef.value[idx] = true
    }

    return offscreen
  })

  imageCanvasesRef.value = newImageCanvases
})

watchEffect(() => {
  const count = images?.length || 0
  if (count === 0) {
    imagePositions.value = []
    return
  }

  const newPositions: SphereIcon[] = []
  const offset = 2 / count
  const increment = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2
    const r = Math.sqrt(1 - y * y)
    const phi = i * increment
    const x = Math.cos(phi) * r
    const z = Math.sin(phi) * r

    newPositions.push({
      x: x * 100,
      y: y * 100,
      z: z * 100,
      scale: 1,
      opacity: 1,
      id: i,
    })
  }

  imagePositions.value = newPositions
})

function animate(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  if (!canvas || !ctx) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  const dx = mousePos.x - centerX
  const dy = mousePos.y - centerY
  const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY)
  const distance = Math.sqrt(dx * dx + dy * dy)

  const speed = 0.003 + (distance / maxDistance) * 0.01

  if (targetRotation.value) {
    const { startX, startY, x: tx, y: ty, startTime, duration } = targetRotation.value
    const elapsed = performance.now() - startTime
    const progress = Math.min(1, elapsed / duration)
    const eased = easeOutCubic(progress)

    rotation.x = startX + (tx - startX) * eased
    rotation.y = startY + (ty - startY) * eased

    if (progress >= 1) {
      targetRotation.value = null
    }
  } else if (!isDragging.value) {
    rotation.x += (dy / canvas.height) * speed
    rotation.y += (dx / canvas.width) * speed
  }

  imagePositions.value.forEach((icon, index) => {
    const cosX = Math.cos(rotation.x)
    const sinX = Math.sin(rotation.x)
    const cosY = Math.cos(rotation.y)
    const sinY = Math.sin(rotation.y)

    const rotatedX = icon.x * cosY - icon.z * sinY
    const rotatedZ = icon.x * sinY + icon.z * cosY
    const rotatedY = icon.y * cosX + rotatedZ * sinX

    const scale = (rotatedZ + 200) / 300
    const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200))

    ctx.save()
    ctx.translate(centerX + rotatedX, centerY + rotatedY)
    ctx.scale(scale, scale)
    ctx.globalAlpha = opacity

    if (imageCanvasesRef.value[index] && imagesLoadedRef.value[index]) {
      ctx.drawImage(imageCanvasesRef.value[index], -20, -20, 40, 40)
    }

    ctx.restore()
  })

  animationFrameRef.value = requestAnimationFrame(() => {
    animate(canvas, ctx)
  })
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  animationFrameRef.value = requestAnimationFrame(() => {
    animate(canvas, ctx)
  })
})

onBeforeUnmount(() => {
  if (animationFrameRef.value) cancelAnimationFrame(animationFrameRef.value)
})
</script>
