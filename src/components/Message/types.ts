import type { ComponentPublicInstance } from 'vue'

export type Key = string | number
export type MessageType = 'primary' | 'info' | 'success' | 'warning' | 'error'
export type MessagePlacement = 'top' | 'bottom'

export interface MessageOptions {
  content?: string
  closable?: boolean
  duration?: number
  key?: Key
  onClose?: () => unknown
  type?: MessageType | null
}

export interface MessageConfig {
  placement?: MessagePlacement
}

export interface MessageInstance extends ComponentPublicInstance {
  add: (options: MessageOptions) => void
  remove: (key: Key) => void
  clear: () => void
  config: (config: MessageConfig) => void
}
