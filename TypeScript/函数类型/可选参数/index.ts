/**
 * 可选参数只能出现在函数参数列表的最后
 */
function log(start: string, end?: string): void {
  console.log('开始：', start, '结束：', end)
}