import { createApp, createVNode, render, type App } from 'vue'
import Component from './Message.vue'
import type {
  Key,
  MessageConfig,
  MessageInstance,
  MessageOptions,
  MessagePlacement,
  MessageType,
} from './types'
import { destroyObject, isNull, toNumber } from '../../utils'
import { proxyExposed } from '../../hooks/shared/utils'

type FuzzyOptions = string | MessageOptions
type ManagerOptions = { duration?: number; placement?: MessagePlacement } & Record<string, unknown>

interface AipMethod {
  (options: MessageOptions): () => void
  (content: string, duration?: number): () => void
  (options: FuzzyOptions, duration?: number): () => void
}

const placementWhiteList: MessagePlacement[] = ['top', 'bottom']

let count = 1

function getKey() {
  return `message-${count++}`
}

export class MessageManager {
  name: string
  defaults: Record<string, unknown>

  private _mountedApp: App<unknown> | null
  private _instance: MessageInstance | null
  private _container: HTMLElement | null
  private _innerApp: App<unknown> | null
  private _wrapper: HTMLElement | null
  private _mountedEl: HTMLElement | null

  open: AipMethod
  primary: AipMethod
  info: AipMethod
  success: AipMethod
  warning: AipMethod
  error: AipMethod

  constructor(options: ManagerOptions = {}) {
    options = {
      ...options,
      duration: options.duration ? toNumber(options.duration) : 3000,
    }

    this._mountedApp = null
    this._instance = null
    this._container = null
    this._innerApp = null
    this._wrapper = null
    this._mountedEl = null
    this.name = 'Message'
    this.defaults = {}

    this.config(options)

    this.open = (content: FuzzyOptions, duration?: number) => {
      return this._open(null, content, duration)
    }

    this.primary = (content: FuzzyOptions, duration?: number) => {
      return this._open('primary', content, duration)
    }

    this.info = (content: FuzzyOptions, duration?: number) => {
      return this._open('info', content, duration)
    }

    this.success = (content: FuzzyOptions, duration?: number) => {
      return this._open('success', content, duration)
    }

    this.warning = (content: FuzzyOptions, duration?: number) => {
      return this._open('warning', content, duration)
    }

    this.error = (content: FuzzyOptions, duration?: number) => {
      return this._open('error', content, duration)
    }
  }

  close(key: Key) {
    if (isNull(key)) {
      this.clear()
    } else {
      this._getInstance()?.remove(key)
    }
  }

  config({ placement, ...others }: MessageConfig & MessageOptions) {
    if (placement) {
      this._getInstance()?.config({
        placement: placementWhiteList.includes(placement) ? placement : placementWhiteList[0],
      })
    }

    this.defaults = { ...this.defaults, ...others }
  }

  clear() {
    this._getInstance()?.clear()
  }

  destroy() {
    if (this._mountedEl) this._wrapper?.removeChild(this._mountedEl)
    this._innerApp?.unmount()
    if (this._container) render(null, this._container)
    destroyObject(this)
  }

  install(app: App, options: ManagerOptions & { property?: string } = {}) {
    const { property, ...others } = options

    this.config(others)
    this._mountedApp = app
    if (property || !app.config.globalProperties.$message) {
      app.config.globalProperties[property || '$message'] = this
    }
  }

  private _getInstance() {
    if (!this._instance) {
      if (!this._mountedApp) {
        console.warn('[chi-ui: Message]: App missing, the plugin maybe not installed.')

        this._container = document.createElement('div')
        this._innerApp = createApp(Component)
        this._instance = this._innerApp.mount(this._container) as MessageInstance
      } else {
        const vnode = createVNode(Component, null, null)

        this._container = document.createElement('div')
        vnode.appContext = this._mountedApp._context

        render(vnode, this._container)

        this._instance = proxyExposed<MessageInstance>(vnode)
      }

      this._mountedEl = this._container.firstElementChild as HTMLElement
      ;(this._wrapper || document.body).appendChild(this._mountedEl)
    }

    return this._instance
  }

  private _open(type: null | MessageType, content: FuzzyOptions, _duration?: number) {
    const options = typeof content === 'string' ? { content, duration: _duration } : content
    const key = options.key ?? getKey()
    const message = this._getInstance()!

    let timer: ReturnType<typeof setTimeout>

    const userCloseFn = options.onClose
    const onClose = () => {
      clearTimeout(timer)

      if (typeof userCloseFn === 'function') return userCloseFn
    }
    const item: MessageOptions = {
      ...this.defaults,
      ...options,
      key,
      type: type ?? options.type,
      onClose,
    }

    message.add(item)
    setDelayClose()

    function setDelayClose() {
      const duration = typeof item.duration === 'number' ? item.duration : 3000

      if (duration >= 500) {
        timer = setTimeout(() => {
          message.remove(key)
        }, duration)
      }
    }

    return () => {
      clearTimeout(timer)
      message.remove(key)
    }
  }
}

export const Message = new MessageManager()
