import type { LucideIcon } from 'lucide-vue-next'

export type ValueType = string | number

export interface InputProps {
  after?: string
  autocomplete?: boolean | string
  before?: string
  clearable?: boolean
  disabled?: boolean
  loading?: boolean
  loadingLock?: boolean
  prefix?: LucideIcon
  placeholder?: string
  showPassword?: boolean
  size?: 'small' | 'medium' | 'large'
  spellcheck?: boolean
  state?: 'success' | 'warning' | 'error'
  suffix?: LucideIcon
  sync?: boolean
  type?: 'text' | 'password' | 'date' | 'datetime' | 'time'
  value?: ValueType
}

export interface InputEmits {
  (e: 'update:value', value: ValueType): void

  (e: 'change', value: ValueType): void
  (e: 'input', value: ValueType): void

  (e: 'blur', value: FocusEvent): void
  (e: 'focus', value: FocusEvent): void

  (e: 'clear'): void
}
