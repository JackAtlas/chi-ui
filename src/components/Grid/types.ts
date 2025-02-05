export type FlexAlignType = 'top' | 'middle' | 'bottom'
export type FlexJustifyType =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'

export interface CellFlexAJ {
  align?: FlexAlignType
  justify?: FlexJustifyType
}

export type CellFlex = boolean | CellFlexAJ | undefined

export interface GridProps {
  autoColumns?: number | string | (number | string)[]
  autoRows?: number | string | (number | string)[]
  cellFlex?: CellFlex
  columns?: number | string | (number | string)[]
  gap?: number | [number, number]
  rows?: number | string | (number | string)[]
}
