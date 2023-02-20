/**
 * 如果两个接口之间，有相同发属性或方法，可以将公共的属性或方法抽离出来，通过继承实现复用
 * 
 * extends关键字实现继承
 */

interface IPoint2D {
  x: number
  y: number
}

interface IPoint3D {
  x: number
  y: number
  z: number
}

interface IPoint3D extends IPoint2D { z: number }