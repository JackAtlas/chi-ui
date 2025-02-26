export type AlertType = 'primary' | 'info' | 'success' | 'warning' | 'error'

export interface AlertProps {
  closable?: boolean
  colorfulText?: boolean
  icon?: boolean | string
  noBorder?: boolean
  title?: string
  type?: AlertType
}

export interface AlertEmits {
  (e: 'close'): void
}
