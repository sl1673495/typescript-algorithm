import {SortFunction} from 'type'
import {swap} from '../util'

/**
 * 插入排序
 * 遍历数组 把每一项和它前一个元素比较
 * 如果比前一个小 就交换
 */
const insertSort: SortFunction = arr => {
  const {length} = arr
  for (let i = 1; i < length; i++) {
    // j > 0 是因为最多反向遍历到第二项
    // 然后第二项会去和第一项对比 交换
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // 如果比前一项小 就交换
        swap(arr, j, j - 1)
      } else {
        // 上一轮循环以后 下标i之前的元素已经是顺序的
        // 如果发现自己已经比上一个元素要大了 那么就不需要继续往前遍历
        // 这也是插入排序的一个优势 如果数组本来就是部分有序 那么会提前终止
        break
      }
    }
  }
  return arr
}

insertSort.sortName = '插入排序'

export default insertSort
