/**
 * @description: average 求平均值
 * @param {number[]} arr
 * @return {number} 数值
 */
export const average = (arr: number[]) => arr.reduce((a, b) => a + b) / arr.length

/**
 * @description: path.resolve 的简单实现，用于解决 vite 直接引入 path 会出错问题
 * @description: ERROR: Module "path" has been externalized for browser compatibility and cannot be accessed in client code.
 * @param {string[]} paths
 * @return {string} processed path
 */
export const resolveAbsolutePath = (...paths: string[]) => {
  let resolvePath = ''
  let isAbsolutePath = false
  for (let i = paths.length - 1; i > -1; i--) {
    const path = paths[i]
    if (isAbsolutePath)
      break
    if (!path)
      continue

    resolvePath = path === '/' ? `${path}${resolvePath}` : `${path}/${resolvePath}`
    isAbsolutePath = path.charCodeAt(0) === 47
  }
  if (/^\/+$/.test(resolvePath)) {
    resolvePath = resolvePath.replace(/(\/+)/, '/')
  }
  else {
    resolvePath = resolvePath.replace(/(?!^)\w+\/+\.{2}\//g, '')
      .replace(/(?!^)\.\//g, '')
      .replace(/\/+$/, '')
  }
  return resolvePath
}

/**
 * 将 10 进制转换成 n 进制
 * @param num 转换值
 * @param n 进制
 * @returns 
 */
export const toDecimal = (num: number, n = 10) => num.toString(n)

/**
 * 将 n 进制转换成 10 进制
 * @param num 
 * @param n 
 * @returns 
 */
export const toDecimalism = (num: string, n = 10) => parseInt(num, n)

/**
 * 在一个数字 num 不足 len 位数的时候前面补零操作
 * @param num 
 * @param len 
 * @param zero 
 * @returns 
 */
export const replenishZero = (num: number, len: number, zero = '0') => num.toString().padStart(len, zero)

/**
 * 随机颜色
 * @returns 
 */
export const getRandomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`

/**
 * 生成一个 ip 地址
 * @returns 
 */
export const randomIp = () =>
    Array(4)
        .fill(0)
        .map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0))
        .join('.');

/**
 * 等待
 * @param t 
 * @returns 
 * @use sleep(2000).then(() => {console.log('time')});
 */
export const sleep = async (t: number) => new Promise((resolve) => setTimeout(resolve, t));
