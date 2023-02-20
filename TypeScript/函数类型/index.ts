/**
 * 函数的参数类型
 * 函数的返回值的类型
 */
function add(num1: number, num2: number): number {
  return num1 + num2;
}

const subtract = (num1: number, num2: number): number => {
  return num1 - num2;
}

// 只适用于函数表达式
const multiply: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 * num2;
}