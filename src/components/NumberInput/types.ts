export type NumberInputControlType = 'right' | 'left' | 'none'
export type NumberInputEmptyType = 'NaN' | 'undefined' | 'null'

export interface NumberInputProps {
  disabled?: boolean
  emptyType?: NumberInputEmptyType
  formatter?: (number: number) => number
  max?: number
  min?: number
  placeholder?: string
  precision?: number
  size?: 'small' | 'medium' | 'large'
  sync?: boolean
  value?: number | null
}

export interface NumberInputEmits {
  (e: 'update:value', value: number | null): void
}
