type Sort = (arr: number[], ...args: any[]) => number[]

export type SortFunction = Sort & {
  sortName: string
}
