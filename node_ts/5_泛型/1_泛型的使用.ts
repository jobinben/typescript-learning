// 泛型 就是把 类型参数化

// 在定义函数时，不决定这些参数是什么类型
// 而是让调用者以参数的形式传递告知，要使用什么类型
function sum<Type>(n: Type) : Type {
    return n
}

// 1. 调用方式一: 明确传入类型
sum<number>(18)
sum<{name: string}>({name: 'jobin'})
sum<any[]>(['a', 'b'])

// 2. 调用方式二: 类型推导
sum(99)
sum('abc')


// 泛型接收参数
function foo<T, S>(n1: T, n2: S) {
    console.log(n1, n2)
}
foo<number, string>(18, 'jobin')


// 泛型结合接口
interface IPerson<T1, T2> {
    name: T1
    age: T2
}

// 可以给默认参数
interface IType<T1 = string, T2 = number> {
    name: T1,
    age: T2
}

const p: IPerson<string, number> = {
    name: 'jobin',
    age: 18
}

const p2: IType = {
    name: 'jobin',
    age: 18
}

console.log(p, p2)

export {}