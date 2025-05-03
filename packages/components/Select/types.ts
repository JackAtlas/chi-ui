// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SelectRawOption = string | Record<string, any>
type SelectBaseValue = string | number | boolean
type SelectValue = SelectBaseValue | SelectBaseValue[] | null

export interface SelectProps {
  clearable?: boolean
  disabled?: boolean
  options?: SelectRawOption[]
  placeholder?: string
  value?: SelectValue
  visible?: boolean
}

export interface SelectEmits {
  (e: 'update:value', value: SelectValue): void
  (e: 'update:visible', visible: boolean): void
}
