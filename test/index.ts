import {sortTest, getRandomArray, getNearlyArray} from './sort-test'
import path from 'path'
import glob from 'glob'

const source = getRandomArray(50000)
const nearlySource = getNearlyArray(10000, 10)
glob('src/*.ts', (err, result) => {
  if (err) throw err
  const sortFunctions = result
    .map(p => require(path.resolve(p)).default)
    .filter(Boolean)
  sortTest(sortFunctions, source, '普通数组排序')
  sortTest(sortFunctions, nearlySource, '近似数组排序')
})
