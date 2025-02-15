export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6
export type TypographyType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'

export interface HTitleProps {
  aligned?: boolean
  marker?: boolean
  markerType?: string
  thin?: boolean
  top?: boolean
  type?: TypographyType
}

export interface TitleProps extends HTitleProps {
  level?: TitleLevel
}

export interface OrderedListProps {
  type: '1' | 'A' | 'a' | 'I' | 'i'
}

export interface UnorderedListProps {
  listStyle?: string
}

export interface TextProps {
  code?: boolean
  delete?: boolean
  disabled?: boolean
  italic?: boolean
  keyboard?: boolean
  mark?: boolean
  reversed?: boolean
  strong?: boolean
  tag?: string
  thin?: boolean
  type?: TypographyType | 'disabled'
  underline?: boolean
}

export interface BlockquoteProps {
  type: TypographyType
}
