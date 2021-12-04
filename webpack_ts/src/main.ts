import { sum } from "./math"

const message: string = 'hello typescript'

console.log(sum(1, 2))
console.log(message)


// 调用命名空间创建的模块

import {time, price} from "./utils/format"

console.log(time.format('xxx'))
console.log(price.format(123))

// 如果导入的第三方库，没有声明类型的话，是无法在.ts调用的
// .d.ts文件 是声明类型文件 d是declare 声明的意思
import axios from "axios"

// 因为axios库 有index.d.ts 类型声明文件
// 所有ts可以通过类型查找到该文件
axios.get('') // 可以调用


// lodash 没有类型声明.d.ts文件
import lodash from "lodash"

// 我们想用lodash 就可以自己写一个类型声明文件

// 如果要调用它的方法，就要定义它的方法类型

console.log(lodash.join(['abc', 'efg'])) 


// 调用index.html的script下的变量
// 要进行类型声明后才不会报错
console.log(myName)
console.log(myAge)

getGender('fale')

const p = new Person('jobing', 18)

console.log(p)

// 对文件的类型声明
import tpng from "./img/test.png"
