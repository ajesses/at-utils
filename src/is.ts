/**
 * @description: is
 * @param {unknown} val
 * @param {string} type
 * @return {boolean} true or false
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

/**
 * @description: 是否为数字
 * @param {unknown} val
 * @return {boolean} true or false
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

/**
 * @description: 是否为布尔值
 * @param {unknown} val
 * @return {boolean} true or false
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

/**
 * @description: 是否为字符串
 * @param {unknown} val
 * @return {boolean} true or false
 */
export function isString(val: unknown): val is string {
  return is(val, 'String')
}

/**
 * @description: 是否为数组
 * @param {unknown} val
 * @return {boolean} true or false
 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}

/**
 * @description: 是否为对象
 * @param {unknown} val
 * @return {boolean} true or false
 */
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}

/**
 * @description: 是否为 null
 * @param {unknown} val
 * @return {boolean} true or false
 */
export function isNull(val: unknown): val is null {
  return val === null
}

/**
 * @description: 是否为 Date 对象
 * @param {unknown} val
 * @return {boolean} true or false
 */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}

/**
 * @description: 根据屏幕宽度判断是否为手机视图
 * @param {unknown} val
 * @return {boolean} true / false
 */
export const isMobile = (width = 992) => document.body.getBoundingClientRect().width - 1 < width

/**
 * @description: 是否为方法
 * @param {unknown} val
 * @return {boolean} true / false
 */
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

/**
 * @description: 对象是否为空
 * @param {unknown} obj
 * @return {boolean} true / false
 */
export const isObjectEmpty = (obj: Object) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object

/**
 * @description: 是否为空
 * @param {unknown} val
 * @return {boolean} true / false
 */
export function isEmpty<T = unknown>(val: T): val is T {
  if (isNull(val))
    return true
  if (isArray(val) || isString(val))
    return val.length === 0

  if (val instanceof Map || val instanceof Set)
    return val.size === 0

  if (isObject(val))
    return Object.keys(val).length === 0

  return false
}

/**
 * @description: 是否为假值
 * @param {unknown} val
 * @return {boolean} true / false
 */
export const isFalsy = (value: unknown) => (value === 0 ? true : !!value)

/**
 * @description: 是否为 JSON 格式
 * @param {unknown} val
 * @return {boolean} true / false
 */
export const isJSON = (data: string) => {
  if (typeof data !== 'string')
    return false
  try {
    const formatData = JSON.parse(data)
    if (typeof formatData === 'object' && formatData)
      return true
    else
      return false
  }
  catch (error) {
    return false
  }
}

/**
 * @description: 对象是否存在此属性，若存在则返回此属性的值，若不存在则返回 true
 * @param {unknown} val
 * @return {boolean} true / false
 */
export const isPropertyExistInObject = (item: any, name = 'visible') => {
  if (({}).hasOwnProperty.call(item, name))
    return item[name]
  else
    return true
}

/**
 * @description: 是否为 Promise 对象
 * @param {unknown} val
 * @return {boolean} true / false
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
    is(val, 'Promise')
    && isObject(val)
    && isFunction(val.then)
    && isFunction(val.catch)
  )
}

/**
 * @description: 是否不是浏览器
 * @param {unknown} val
 * @return {boolean} true / false
 */
export const isServer = typeof window === 'undefined'

/**
 * @description: 是否是客户端（浏览器）
 * @param {unknown} val
 * @return {boolean} true / false
 */
export const isClient = !isServer

/**
 * @description: 是否为 url
 * @param {unknown} val
 * @return {boolean} true / false
 */
export const isUrl = (path: string): boolean => {
  const reg
    = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}
