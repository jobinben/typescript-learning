// 1. 函数作为参数时，在参数中如何编写类型
function foo() {}

type FooType = () => void
function bar(fn: FooType) {
    fn()
}

bar(foo)

// 2. 定义常量时，编写函数的类型
type AddFnType = (num1: number, num2: number) => number
const add: AddFnType = (n1, n2) => {
    return n1 + n2
}
add(1, 3)

// 函数的应用案列
function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number) {
    return fn(n1, n2)
}

const res = calc(10, 20, (a1, a2) => {
    return a1 + a2
})

console.log(res)

const res2 = calc(10, 20, (a1, a2) => {
    return a1 / a2
})

console.log(res2)

// 3. 函数参数的可选类型必须写在后面
function foo2(x: number, y?: number) {}
foo2(10)
foo2(10, 20)

// 默认值
function foo3(x: number, y: number = 20) {}

// 4. 剩余参数 ...arguments: 类型[]
function sum(initalNum: number, ...nums: number[]) {
    let total = initalNum
    for ( const num of nums) {
        total += num
    }
    return total
}

const res3 = sum(1, 2, 3)
console.log(res3)

// 5. this是可以被推导出来 info对象(typescript推导出来)
const info = {
    name: 'jobin',
    eating() {
        console.log(this.name + ' eating')
    }
}

info.eating()

type thisType = {name: string}
function eating(this: thisType, msg: string) {
    console.log(this.name + ' eating', msg)
}
const info2 = {
    name: 'dabing',
    eating: eating
}

// 隐式绑定
info2.eating('bind')

// 显示绑定
eating.call({name: 'jj'}, 'call')
eating.apply({name: 'ii'}, ['apply'])

// 6. 函数的重载: 函数的名称相同，但是参数不同的几个函数，就是函数的重载
// js是没有函数重载的，因为js的函数是没有签名
function add2(n1: number, n2: number): number // 没有函数体
function add2(n1: string, n2: string): string

// 具体实现函数体
function add2(n1: any, n2: any):any {
    return n1 + n2
}

const res4 = add2(10, 20)
const res5 = add2('abc', 'def')

console.log(res4, res5)

export {}