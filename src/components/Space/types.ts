export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch'
export type SpaceJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
export type SpaceSize = 'small' | 'default' | 'large' | 'number' | [number, number]

export interface SpaceProps {
  align?: SpaceAlign
  justify?: SpaceJustify
  size?: SpaceSize
  vertical?: boolean
}
