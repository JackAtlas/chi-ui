import type { App } from 'vue'

import { Button } from './Button'
import { Icon } from './Icon'
import { Linker } from './Linker'

import { Cell } from './Cell'
import { Divider } from './Divider'
import { Grid } from './Grid'
import { Space } from './Space'

const components = [Button, Icon, Linker, Cell, Divider, Grid, Space]

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
