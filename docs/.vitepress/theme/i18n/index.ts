import { createI18n } from 'vue-i18n'
import { zhCN } from './zh-CN'

export const langOptions = ['zh-CN', 'en-US'] as const
export const defaultLanguage =
  typeof navigator !== 'undefined'
    ? langOptions.find((l) => l === navigator.language) || 'zh-CN'
    : 'zh-CN'

export const i18n = createI18n({
  legacy: false,
  locale: defaultLanguage,
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN
  }
})
