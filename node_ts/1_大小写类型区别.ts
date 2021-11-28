var name: string = 'jobin'
let age: number = 18
const gender: boolean = true

// 小写的string: 表示TypeScript的字符串类型
// 大写的String: 表示JavaScript的字符串包装类的类型  new String()
const message: String = 'js的字符串包装类类型'

// 两者很大区别
console.log(name)
console.log(message)


// 导出一个对象，让当前文件的作用域处于一个模块作用域
// 如果不导出一个对象，我们当前文件的作用域属于全局的作用域，定义的变量会和其他环境冲突，从而导致报错
export {}