export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6
export type TypographyType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'

export interface HTitleProps {
  marker?: boolean
  markerType?: string
  thin?: boolean
  top?: boolean
  type?: TypographyType
}

export interface TitleProps extends HTitleProps {
  level?: TitleLevel
}

export interface ListProps {
  listStyle?: string
}
