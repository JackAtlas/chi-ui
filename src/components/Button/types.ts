export type ButtonAttrType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'

export interface ButtonProps {
  attrType?: ButtonAttrType
  block?: boolean
  disabled?: boolean
  loading?: boolean
  size?: ButtonSize
  type?: ButtonType
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}
