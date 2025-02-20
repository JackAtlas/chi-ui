export type NumberInputControlType = 'right' | 'left' | 'none'
export type NumberInputEmptyType = 'NaN' | 'undefined' | 'null'

export interface NumberInputProps {
  disabled?: boolean
  clearable?: boolean
  controlType?: NumberInputControlType
  emptyType?: NumberInputEmptyType
  formatter?: (number: number) => number
  max?: number
  min?: number
  placeholder?: string
  precision?: number
  size?: 'small' | 'medium' | 'large'
  state?: 'default' | 'success' | 'warning' | 'error'
  step?: number
  sync?: boolean
  value?: number | null
}

export interface NumberInputEmits {
  (e: 'update:value', value: number | null): void
  (e: 'blur', event: FocusEvent): void
  (e: 'clear'): void
  (e: 'focus', event: FocusEvent): void
}
