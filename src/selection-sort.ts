import {SortFunction} from '../type'
import {swap} from '../util'

/**
 * 选择排序
 * 遍历数组 找到最小的一项放到最前面 重复此过程
 */

const selectionSort: SortFunction = arr => {
  const {length} = arr

  for (let i = 0; i < length; i++) {
    // 寻找[i, n)区间里的最小值
    let minIndex = i

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    swap(arr, i, minIndex)
  }

  return arr
}

selectionSort.sortName = '选择排序'

export default selectionSort
