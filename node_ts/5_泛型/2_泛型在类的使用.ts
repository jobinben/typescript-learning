class Point<T> {
    x: T
    y: T
    constructor(x: T, y: T) {
        this.x = x
        this.y = y
    }
}


const p1 = new Point('1.4', '4.1') // 可以不用传入类型，因为调用函数的时候，会进行类型推导
const p2 = new Point<number>(1, 4)

const p3: Point<boolean> = new Point(false, true)

console.log(p1)
console.log(p2)
console.log(p3)


// 2. 泛型的类型约束
interface ILength {
    length: number
}

function getLength<T extends ILength>(arg: T) {
    return arg.length
}

// 只要传入的对象里面有length属性 才行，而且length属性必须为number类型
getLength('abc')
getLength([1, 2, 3])
getLength({length: 100})

// getLength(10) // 简单类型没有length属性 报错


export {}
