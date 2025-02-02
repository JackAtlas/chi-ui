export type LinkerType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'

export interface LinkerProps {
  disabled?: boolean
  icon?: string
  target?: HTMLAnchorElement['target']
  to?: HTMLHyperlinkElementUtils['href']
  type?: LinkerType
}
