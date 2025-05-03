import type { HTMLAttributes } from 'vue'

export interface SphereIcon {
  x: number
  y: number
  z: number
  scale: number
  opacity: number
  id: number
}

export interface IconCloudProps {
  ariaLabel?: string
  class?: HTMLAttributes['class']
  height?: number
  images: string[]
  width?: number
}
