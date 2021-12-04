// 1. type 不能定义同样名字的类型
type TType = {
    name: string
}

// type TType = {
//     age: number
// }

// 2. interface可以定义同样名字的类型
// 如果存在同样名字的接口，会合并两个接口
interface IType {
    name: string
}

interface IType {
    age: number
}

const p: IType = {
    name: 'jobin',
    age: 18
}

export {}