import type { InjectionKey } from 'vue'

export type CollapseArrowType = 'right' | 'left' | 'none'
export type ExpandedType = string | number | (string | number)[]

export interface CollapseProps {
  accordion?: boolean
  arrowType?: CollapseArrowType
  expanded?: ExpandedType
}

export interface CollapseEmits {
  (e: 'update:expanded', expandedLabels: ExpandedType): void
}

export interface PanelProps {
  arrowType?: CollapseArrowType
  label?: string | number
  disabled?: boolean
  expanded?: boolean
  icon?: string
  title?: string
}

export interface PanelEmits {
  (e: 'update:expanded', expanded: boolean): void
}

export interface PanelState {
  expanded: boolean
  label: string | number
  tab?: HTMLElement | null

  setExpanded: (expanded: boolean) => void
}

export interface CollapseState {
  arrowType: CollapseArrowType
  expandPanel(label: string | number, expanded: boolean): void
  unregisterPanel(panel: PanelState): void
  refreshLabels: () => void
  registerPanel(panel: PanelState): void
}

export const COLLAPSE_STATE = '__CHI_COLLAPSE_STATE' as unknown as InjectionKey<CollapseState>
