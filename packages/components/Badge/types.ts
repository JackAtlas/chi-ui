export interface BadgeProps {
  color?: string
  content?: number | string
  isDot?: boolean
  max?: number
  type?: 'primary' | 'info' | 'success' | 'warning' | 'error' | 'disabled'
}

export interface BadgeEmits {
  (e: 'badge-click'): void
}
