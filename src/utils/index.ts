export function toPascalCase(str: string): string {
  return str
    .replace(/([-_][a-z0-9])/gi, (match: string) =>
      match.toUpperCase().replace('-', '').replace('_', ''),
    )
    .replace(/^([a-z])/, (match: string) => match.toUpperCase())
}

let globalCount = 0

export function getGlobalCount() {
  return globalCount++
}

export function isNull(value: unknown): value is null | undefined {
  return value === undefined || value === null
}

export * from './destroy-object'
export * from './number'
