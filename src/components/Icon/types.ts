import type { LucideIcon } from 'lucide-vue-next'

export type EffectType = 'spin-in' | 'spin-out'

export interface IconProps {
  color?: string
  effect?: EffectType
  icon?: LucideIcon
  scale?: number
  size?: string
  strokeWidth?: number
}
