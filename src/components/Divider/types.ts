export interface DividerProps {
  dashed?: boolean
  margin?: string | number
  primary?: boolean
  textPosition?: 'left' | 'center' | 'right'
  vertical?: boolean
}

export interface ClassType {
  'chi-divider': boolean
  'chi-divider--dashed'?: boolean
  'chi-divider--horizontal'?: boolean
  'chi-divider--primary'?: boolean
  'chi-divider--vertical'?: boolean
  'chi-divider--with-text'?: boolean
  'chi-divider--with-text-left'?: boolean
  'chi-divider--with-text-right'?: boolean
}
