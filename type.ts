type Sort = (arr: number[]) => number[]

export type SortFunction = Sort & {
  sortName: string
}
