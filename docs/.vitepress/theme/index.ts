// https://vitepress.dev/guide/custom-theme
import { h, type App } from 'vue'
import type { Router, Theme } from 'vitepress'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { install as ChiUI } from '@jackatlas/chi-ui'
import '@jackatlas/chi-ui/style.css'
// import { i18n } from './i18n'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router }: { app: App; router: Router }) {
    app.component('demo-preview', ElementPlusContainer).use(ChiUI)
  }
} satisfies Theme
