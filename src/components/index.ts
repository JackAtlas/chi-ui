import type { App } from 'vue'

import { Button } from './Button'
import { Icon } from './Icon'
import { Linker } from './Linker'
import { Title, H1, H2, H3, H4, H5, H6, Ol, Ul, P, Strong, Blockquote, Text } from './Typography'

import { Divider } from './Divider'
import { Cell, Grid } from './Grid'
import { Space } from './Space'

import { Input } from './Input'
import { NumberInput } from './NumberInput'
import { Select } from './Select'

import { Badge } from './Badge'
import { Collapse, CollapsePanel } from './Collapse'
import { Tooltip } from './Tooltip'

import { Alert } from './Alert'
import { Message } from './Message'

import { Masker } from './Masker'
import { IconCloud } from './IconCloud'

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
  Ol,
  Ul,
  P,
  Strong,
  Blockquote,
  Text,

  // 布局
  Cell,
  Divider,
  Grid,
  Space,

  // 表单
  Input,
  NumberInput,
  Select,

  // 数据
  Badge,
  Collapse,
  CollapsePanel,
  Tooltip,

  // 反应
  Alert,
  Message,

  // 其他
  Masker,
  IconCloud,
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export * from './Alert'
export * from './Badge'
export * from './Button'
export * from './Collapse'
export * from './Divider'
export * from './Grid'
export * from './Icon'
export * from './IconCloud'
export * from './Input'
export * from './Linker'
export * from './Masker'
export * from './Message'
export * from './NumberInput'
export * from './Popup'
export * from './Select'
export * from './Space'
export * from './Tooltip'
export * from './Typography'
