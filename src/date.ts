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

export function getSeconds(time: number, type: DateType, ms = 1) {
  if (type === 'day')
    return time * 24 * 60 * 60 * ms
}
