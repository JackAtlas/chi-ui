import type { LucideIcon } from 'lucide-vue-next'

export type AlertType = 'primary' | 'info' | 'success' | 'warning' | 'error'

export interface AlertProps {
  closable?: boolean
  colorfulText?: boolean
  icon?: boolean | LucideIcon
  noBorder?: boolean
  title?: string
  type?: AlertType
}

export interface AlertEmits {
  (e: 'close'): void
}
