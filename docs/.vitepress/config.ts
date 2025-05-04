import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview
} from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Chi-UI',
  description: '一个 Vue 3 组件库，全量 Typescript。',
  lang: 'zh-Hans',
  base: '/chi-ui/',
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南',
        link: '/zh-CN/guides/chi-ui',
        activeMatch: '/guides/'
      },
      {
        text: '组件',
        link: '/zh-CN/components/button',
        activeMatch: '/components/'
      }
    ],

    sidebar: {
      '/zh-CN/guides/': [
        {
          text: '介绍',
          items: [
            { text: '欢迎来到 Chi-UI', link: '/zh-CN/guides/chi-ui' },
            {
              text: '快速上手',
              link: '/zh-CN/guides/getting-started'
            }
          ]
        }
      ],
      '/zh-CN/components/': [
        {
          text: '基础',
          items: [
            {
              text: 'Button | 按钮',
              link: '/zh-CN/components/button'
            },
            { text: 'Icon | 图标', link: '/zh-CN/components/icon' },
            {
              text: 'Linker | 链接',
              link: '/zh-CN/components/linker'
            },
            {
              text: 'Typography | 排版',
              link: '/zh-CN/components/typography'
            }
          ]
        },
        {
          text: '布局',
          items: [
            {
              text: 'Divider | 分割线',
              link: '/zh-CN/components/divider'
            },
            {
              text: 'Grid | 栅格布局',
              link: '/zh-CN/components/grid'
            },
            { text: 'Space | 空间', link: '/zh-CN/components/space' }
          ]
        },
        {
          text: '表单',
          items: [
            {
              text: 'Input | 输入框',
              link: '/zh-CN/components/input'
            },
            {
              text: 'NumberInput | 数字输入框',
              link: '/zh-CN/components/numberinput'
            },
            {
              text: 'Select | 选择器',
              link: '/zh-CN/components/select'
            }
          ]
        },
        {
          text: '数据',
          items: [
            { text: 'Badge | 徽标', link: '/zh-CN/components/badge' },
            {
              text: 'Collapse | 折叠面板',
              link: '/zh-CN/components/collapse'
            },
            {
              text: 'Tooltip | 提示',
              link: '/zh-CN/components/tooltip'
            }
          ]
        },
        {
          text: '反应',
          items: [
            {
              text: 'Alert | 警告提示',
              link: '/zh-CN/components/alert'
            }
            // { text: 'Message | 消息提示', link: '/zh-CN/components/message' }
          ]
        },
        {
          text: '其他',
          items: [
            {
              text: 'Masker | 遮罩',
              link: '/zh-CN/components/masker'
            },
            {
              text: 'IconCloud | 图标云',
              link: '/zh-CN/components/iconcloud'
            }
          ]
        }
      ]
    },

    socialLinks: [
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/@jackatlas/chi-ui'
      },
      {
        icon: 'github',
        link: 'https://github.com/JackAtlas/chi-ui'
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gitee</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
        },
        link: 'https://gitee.com/jackatlas8864/chi-ui'
      }
    ]
  }
})
