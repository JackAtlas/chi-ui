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

export type UseFlex = boolean | CellFlexAJ | null | undefined

export interface CellProps {
  bottom?: number | string
  height?: number
  left?: number | string
  right?: number | string
  top?: number | string
  useFlex?: boolean | UseFlex
  width?: number
}
