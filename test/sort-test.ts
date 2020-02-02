import {SortFunction} from '../type'
import {swap} from '../util'

export function sortTest(
  sortFns: SortFunction[],
  source: Array<number>,
  desc: string = '',
) {
  console.log(desc)
  const table = {}

  sortFns.forEach(fn => {
    const copy = source.slice()
    const start = new Date().getTime()
    fn(copy)
    const end = new Date().getTime()
    const time = end - start
    const timeStr = `${time}ms`
    const success = isSorted(copy, source)
    table[fn.sortName] = {
      耗时: timeStr,
      数据长度: source.length,
      结果: success ? '成功' : '失败',
      数据: copy,
    }
  })

  console.table(table)
}

export function getRandomArray(count: number) {
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push(Math.floor(i * Math.random() * 10))
  }

  return arr
}

export function getNearlyArray(count: number, swapTime: number) {
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push(i)
  }

  for (let i = 0; i < swapTime; i++) {
    const x = Math.floor(Math.random() * count)
    const y = Math.floor(Math.random() * count)
    swap(arr, x, y)
  }

  return arr
}

export function isSorted(target: number[], source: number[]) {
  return (
    target.toString() ===
    source
      .slice()
      .sort((a, b) => a - b)
      .toString()
  )
}
