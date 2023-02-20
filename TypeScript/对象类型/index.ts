/**
 * 分号相隔
 * 如果有函数，则必须带括号，可以在括号内指定参数的类型
 */

const person: { name: string; age: number; say(content: string): void } = {
  name: 'zs',
  age: 20,
  say(content) {
    console.log(content);
  }
}

// 如果只有一个参数，可以省略分号
const dog: { name: string } = {
  name: 'dian dian'
}

// 函数的类型，可以使用箭头函数
const student: { name: string; age: number; say: (content: string) => void } = {
  name: 'zs',
  age: 20,
  say(content) {
    console.log(content);
  }
}