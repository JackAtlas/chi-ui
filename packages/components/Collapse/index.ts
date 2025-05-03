import Collapse from './Collapse.vue'
import CollapsePanel from './CollapsePanel.vue'

export { Collapse, CollapsePanel }

let id = 1

export function getIndexId() {
  return id++
}
