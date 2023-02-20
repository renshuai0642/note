/**
 * 当一个对象类型被多次使用，一般使用接口（interface）来描述对象的类型，达到复用的目的
 */

interface IPerson {
  name: string;
  age?: number;
  say: (content: string) => void
}

// 每行一个属性类型，可以省略分号
interface IStudent {
  name: string
  age: number
}

const person: IPerson = {
  name: 'zs',
  say(content) {
    console.log(content);
  }
}