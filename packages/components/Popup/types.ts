import type { InjectionKey } from 'vue'

export type Key = string | number
export type PopupPlacement =
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'

export interface PopupProps {
  itemOffset?: number
  placement: PopupPlacement
  startOffset?: number
}

export const DELETE_HANDLER = '__CHI_POPUP_DELETE_HANDLER' as unknown as InjectionKey<
  (key: Key) => void
>

export interface PopupItemState extends Record<string, unknown> {
  closable: boolean
  content: string
  height: number
  key: Key
  verticalPosition: number
  visible: boolean

  onClose: (result: boolean) => void
  onOpen: (key: Key) => void
}
