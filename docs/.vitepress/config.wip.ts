import { withPwa } from '@vite-pwa/vitepress'
import { defineConfigWithTheme } from 'vitepress'
import { getComponentConfig } from './component'

import {
  SITE_DESC,
  SITE_DESC_ZH,
  SITE_NAME,
  SITE_TITLE,
  SITE_TITLE_ZH
} from './constant'

export default defineConfigWithTheme({
  titleTemplate: SITE_NAME,
  lastUpdated: true,
  description: 'Another Vue 3 Component Library',
  themeConfig: {
    asideMenus: {},
    nav: [
      {
        key: 'guides',
        i18n: 'common.guides',
        link: '/guide/chi-ui',
        activeMatch: '/guide/'
      },
      {
        key: 'components',
        i18n: 'common.components',
        link: '/component/button',
        activeMatch: '/component/'
      }
    ],
    outline: {
      '/guide/': [2, 3],
      '/component/': [2, 3]
    },
    footerLinks: []
  },
  locales: {
    'en-US': {
      label: 'English',
      lang: 'en-US',
      description: SITE_DESC,
      head: [
        ['meta', { property: 'og: description', content: SITE_DESC }],
        ['meta', { property: 'og:title', content: SITE_TITLE }]
      ],
      themeConfig: {
        asideMenus: {}
      }
    },
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN',
      description: SITE_DESC_ZH,
      head: [
        [
          'meta',
          { property: 'og: description', content: SITE_DESC_ZH }
        ],
        ['meta', { property: 'og:title', content: SITE_TITLE_ZH }]
      ],
      themeConfig: {
        asideMenus: getAsideMenus()
      }
    }
  }
})

function getAsideMenus() {
  return {
    '/component/': getComponentConfig().map((group) => {
      return {
        key: group.name,
        i18n: `group.${group.name}`,
        count: true,
        items: group.components.map((component) => {
          const link = `/component/${component.name}`

          return {
            key: component.name,
            link,
            text: component.name,
            subI18n: `component.${component.name}`,
            noSub: ['en-US']
          }
        })
      }
    })
  }
}
