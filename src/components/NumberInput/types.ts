export type NumberInputControlType = 'right' | 'left' | 'none'
export type NumberInputEmptyType = 'NaN' | 'undefined' | 'null'

export interface NumberInputProps {
  disabled?: boolean
  controlType?: NumberInputControlType
  emptyType?: NumberInputEmptyType
  formatter?: (number: number) => number
  max?: number
  min?: number
  placeholder?: string
  precision?: number
  size?: 'small' | 'medium' | 'large'
  step?: number
  sync?: boolean
  value?: number | null
}

export interface NumberInputEmits {
  (e: 'update:value', value: number | null): void
  (e: 'blur', event: FocusEvent): void
  (e: 'focus', event: FocusEvent): void
}
