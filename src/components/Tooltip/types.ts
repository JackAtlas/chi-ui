import type { Placement } from '@floating-ui/vue'

export interface TooltipProps {
  closeDelay?: number
  noArrow?: boolean
  openDelay?: number
  placement?: Placement
  reverse?: boolean
  trigger?: 'hover' | 'click'
}

export interface TooltipEmits {
  (e: 'visible-change', visible: boolean): void
}
