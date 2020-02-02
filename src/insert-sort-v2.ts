import {SortFunction} from 'type'

/**
 * 插入排序
 * 遍历数组 把每一项和它前一个元素比较
 * 如果比前一个小 就交换
 */
const insertSort: SortFunction = (arr, left = 0, right = arr.length - 1) => {
  for (let i = left; i <= right; i++) {
    // 拿出当前元素 临时存储在e中
    const e = arr[i]

    // 保存元素e应该插入的位置
    let j: number

    // j > 0 并且前面一项的元素要比e大
    // 如果前面的元素比e小的话 那就说明e应该交换到j当前的位置
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      // 满足条件的话 直接把前一个位置的元素向移一位
      arr[j] = arr[j - 1]
    }

    // 最后把找到的j下标赋值为e
    arr[j] = e
  }
  return arr
}

insertSort.sortName = '插入排序（优化版）'

export default insertSort
