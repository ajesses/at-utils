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
