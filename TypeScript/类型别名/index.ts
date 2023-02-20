/**
 * 可以为任意类型指定别名
 * 要有等号=
 */

/**
 * 接口只能为对象指定类型
 * 类型别名可以为任意类型指定别名
 */

type TPerson = {
  name: string
  age?: number
  say(content: string): void
}

const person: TPerson = {
  name: 'zs',
  say(value) {
    console.log(value);
  }
}

type TNumString = number | string

const numStr: TNumString = 20;
const numStr2: TNumString = 'HELLO';