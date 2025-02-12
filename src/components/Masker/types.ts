export interface MaskerProps {
  active: boolean
  closable?: boolean
  transfer?: boolean | string
}

export interface MaskerEmits {
  (e: 'update:active', value: boolean): void
  (e: 'close'): void
}
