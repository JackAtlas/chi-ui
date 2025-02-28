import type { LucideIcon } from 'lucide-vue-next'

export type LinkerType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'

export interface LinkerProps {
  disabled?: boolean
  icon?: LucideIcon
  target?: HTMLAnchorElement['target']
  to?: HTMLHyperlinkElementUtils['href']
  type?: LinkerType
  underline?: boolean
}
