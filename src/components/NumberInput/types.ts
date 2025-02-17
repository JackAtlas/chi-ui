export type NumberInputControlType = 'right' | 'left' | 'none'
export type NumberInputEmptyType = 'NaN' | 'undefined' | 'null'

export interface NumberInputProps {
  disabled?: boolean
  placeholder?: string
  value?: number | null
}

export interface NumberInputEmits {
  (e: 'update:value', value: number | null): void
}
