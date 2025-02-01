export function toPascalCase(str: string): string {
  return str
    .replace(/([-_][a-z0-9])/gi, (match: string) =>
      match.toUpperCase().replace('-', '').replace('_', ''),
    )
    .replace(/^([a-z])/, (match: string) => match.toUpperCase())
}
