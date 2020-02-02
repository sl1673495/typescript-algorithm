import {SortFunction} from 'type'
import insertSort from './insert-sort-v2'

/**
 * 归并排序
 * 不停的把数组从中间切割成两部分 然后对左右两部分进行双端排序
 * 最终归并成一个排序好的数组
 */

// 递归使用归并排序 对arr[left...right]的范围进行排序
const merge = (arr: number[], left: number, right: number) => {
  // 在只剩下15个元素的时候 退回为插入排序
  if (right - left <= 15) {
    // 这里right需要+1
    return insertSort(arr, left, right)
  }
  // 取中间数 丢弃小数部分
  const mid = Math.floor((left + right) / 2)
  // 对左半部分归并
  merge(arr, left, mid)
  // 对右半部分归并
  merge(arr, mid + 1, right)

  // 归并排序中 总能保证arr[left...mid]和arr[mid...right]的数组都是有序的
  // 所以如果数组的中间值大于数组右边的值 才说明左右两边需要排序
  if (arr[mid] > arr[mid + 1]) {
    // 对数组归并好的两端进行顺序合并
    mergeThunk(arr, left, mid, right)
  }
}

// 将arr[left...mid]和arr[mid+1...right]两部分进行归并
const mergeThunk = (
  arr: number[],
  left: number,
  mid: number,
  right: number,
) => {
  // 临时拷贝
  const aux = []
  for (let i = left; i <= right; i++) {
    aux[i - left] = arr[i]
  }
  let i = left
  let j = mid + 1

  for (let k = left; k <= right; k++) {
    // 说明i指向的数组已经遍历完了
    // j数组还有剩余元素
    // 所以直接把j数组的剩余部分依次赋值
    if (i > mid) {
      arr[k] = aux[j - left]
      j++
      // 反过来
    } else if (j > right) {
      arr[k] = aux[i - left]
      i++
      // 正常的双数组对比
    } else if (aux[i - left] < aux[j - left]) {
      arr[k] = aux[i - left]
      i++
    } else {
      arr[k] = aux[j - left]
      j++
    }
  }
}

const mergeSort: SortFunction = arr => {
  merge(arr, 0, arr.length - 1)
  return arr
}

mergeSort.sortName = '归并排序'

export default mergeSort
