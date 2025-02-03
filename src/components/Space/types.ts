export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch'
export type SpaceJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
export type SpaceSize = 'small' | 'default' | 'large' | number | [number, number]

export interface SpaceProps {
  align?: SpaceAlign
  inline?: boolean
  justify?: SpaceJustify
  noWrap?: boolean
  size?: SpaceSize
  vertical?: boolean
}

export interface ClassType {
  'chi-space--inline'?: boolean
  'chi-space--large'?: boolean
  'chi-space--no-wrap'?: boolean
  'chi-space--small'?: boolean
  'chi-space--vertical'?: boolean
}
