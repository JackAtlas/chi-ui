export type EffectType = 'spin-in' | 'spin-out'

export interface IconProps {
  defaultClass?: string
  color?: string
  effect?: EffectType
  name: string
  scale?: number
  size?: string
  strokeWidth?: number
}
