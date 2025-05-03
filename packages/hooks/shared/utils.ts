import type { VNode } from 'vue'

export function proxyExposed<T>(vnode: VNode): T {
  return new Proxy({} as any, {
    get(_, key) {
      if (!vnode.component) return undefined

      return (
        (vnode.component.proxy as any)?.[key] ??
        (vnode.component.exposeProxy as any)?.[key] ??
        (vnode.component.exposed as any)?.[key]
      )
    },
  }) as T
}
