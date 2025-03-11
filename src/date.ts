import type { DateType } from './types'

export const dayDiff = (date1: Date, date2: Date) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

export const isWeekday = (date: Date) => date.getDay() % 6 !== 0

// type: day, hour, minute, second
export function getTimeDuration(time: number, type: DateType, ms = 1) {
  if (type === 'day')
    return Math.floor(time / ms / 60 / 60 / 24)
  if (type === 'hour') {
    const day = Math.floor(time / ms / 60 / 60 / 24)
    return Math.floor(time / ms / 60 / 60 - 24 * day)
  }
  if (type === 'minute') {
    const day = Math.floor(time / ms / 60 / 60 / 24)
    const hour = Math.floor(time / ms / 60 / 60 - 24 * day)
    return Math.floor(time / ms / 60 - 24 * 60 * day - 60 * hour)
  }
  if (type === 'second') {
    const day = Math.floor(time / ms / 60 / 60 / 24)
    const hour = Math.floor(time / ms / 60 / 60 - 24 * day)
    const minute = Math.floor(time / ms / 60 - 24 * 60 * day - 60 * hour)
    return time / ms - 24 * 60 * 60 * day - 60 * 60 * hour - 60 * minute
  }
}

export function getSeconds(time: number, type: DateType, formatType: DateType = 'second', ms = 1) {
  let res = 0
  const map = new Map<[DateType, DateType], number>()
  map.set(['day', 'hour'], 24)
  map.set(['day', 'minute'], 24 * 60)
  map.set(['day', 'second'], 24 * 60 * 60)
  switch (type) {
    case 'day':
      res = time * 24 * 60 * 60
      break
    case 'hour':
      res = time * 60 * 60
      break
    case 'minute':
      res = time * 60
      break
    case 'second':
      res = time
      break
    default:
      break
  }
  return res * ms
}
