export type LinkerType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'

export interface LinkerProps {
  disabled?: boolean
  target?: HTMLAnchorElement['target']
  to?: HTMLHyperlinkElementUtils['href']
  type?: LinkerType
}
