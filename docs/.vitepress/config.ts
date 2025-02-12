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
        text: '基础',
        items: [
          { text: 'Button | 按钮', link: 'zh-CN/components/button' },
          { text: 'Icon | 图标', link: 'zh-CN/components/icon' },
          { text: 'Linker | 链接', link: 'zh-CN/components/linker' },
        ],
      },
      {
        text: '布局',
        items: [
          { text: 'Divider | 分割线', link: 'zh-CN/components/divider' },
          { text: 'Grid | 栅格布局', link: 'zh-CN/components/grid' },
          { text: 'Space | 空间', link: 'zh-CN/components/space' },
        ],
      },
      {
        text: '表单',
        items: [{ text: 'Input | 输入框', link: 'zh-CN/components/input' }],
      },
      {
        text: '其他',
        items: [{ text: 'Masker | 遮罩', link: 'zh-CN/components/masker' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/JackAtlas/chi-ui' }],
  },
})
