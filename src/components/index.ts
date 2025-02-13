import type { App } from 'vue'

import { Button } from './Button'
import { Icon } from './Icon'
import { Linker } from './Linker'
import { Title, H1, H2, H3, H4, H5, H6 } from './Typography'

import { Cell } from './Cell'
import { Divider } from './Divider'
import { Grid } from './Grid'
import { Space } from './Space'

import { Input } from './Input'

import { Badge } from './Badge'

import { Masker } from './Masker'

const components = [
  // 基础
  Button,
  Icon,
  Linker,
  Title,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,

  // 布局
  Cell,
  Divider,
  Grid,
  Space,

  // 表单
  Input,

  // 数据
  Badge,

  // 其他
  Masker,
]

function createInstall(components: any[] = []) {
  return function install(app: App) {
    components.forEach((component) => {
      if (typeof component === 'function' || typeof component.install === 'function') {
        app.use(component)
      } else {
        app.component(component.name!, component)
      }
    })
  }
}

export const install = createInstall(components)
