export const numberRE = /^\s*[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?\s*$/

export function isValidNumber(value: unknown, strict = false) {
  if (typeof value === 'number') {
    return !Number.isNaN(value)
  }

  if (strict) {
    return numberRE.test(String(value))
  }

  return !Number.isNaN(parseFloat(value as string)) || !Number.isNaN(Number(value))
}

export function toNumber(value: unknown) {
  let number = parseFloat(value as string)

  if (Number.isNaN(number)) {
    number = Number(value)
  }

  return Number.isNaN(number) ? 0 : number
}

export function decimalLength(number: number | string) {
  const eSplit = number.toString().split(/[eE]/)
  const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0)

  return len > 0 ? len : 0
}

export function toFixed(number: number, decimal: number) {
  if (decimal === 0) return Math.round(number)

  let snum = number.toFixed(decimalLength(number))

  const pointPos = snum.indexOf('.')

  if (pointPos === -1) return number

  const nums = snum.replace('.', '').split('')
  const targetPos = pointPos + decimal
  const datum = nums[targetPos]

  if (!datum) return number

  if (snum.charAt(targetPos + 1) === '5') {
    snum = snum.substring(0, targetPos + 1) + '6'
  } else {
    snum = snum.substring(0, targetPos + 2)
  }

  return parseFloat(Number(snum).toFixed(decimal))
}

export function boundRange(number: number | string, min: number, max: number) {
  return Math.max(min, Math.min(max, parseFloat(number as string)))
}
