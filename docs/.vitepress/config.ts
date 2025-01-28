import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Chi-UI',
  description: '一个 Vue 3 组件库，全量 Typescript。',
  lang: 'zh-Hans',
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/zh-CN/components/button' },
    ],

    sidebar: [
      {
        text: '组件',
        items: [{ text: 'Button', link: 'zh-CN/components/button' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
