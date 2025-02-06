export type ValueType = string | number

export interface InputProps {
  after?: string
  autocomplete?: boolean | string
  before?: string
  clearable?: boolean
  disabled?: boolean
  placeholder?: string
  showPassword?: boolean
  size?: 'small' | 'medium' | 'large'
  spellcheck?: boolean
  type?: 'text' | 'password' | 'date' | 'datetime' | 'time'
  value?: ValueType
}

export interface InputEmits {
  (e: 'update:value', value: ValueType): void
}
