// 一种组合类型的方式: 联合类型
type TheType = number | string
type Direction = 'left' | 'right'

// 另一种组合类型的方式: 交叉类型
type TType = number & string // type定义的交叉类型推导为never

interface ISwim {
    swimming: () => void
}

interface IFly {
    flying: () => void
}

// 接口的交叉类型 类似于 逻辑与 逻辑或
type TType1 = ISwim | IFly  
type TType2 = ISwim & IFly

const obj1: TType1 = {
    flying() {

    }
}

const obj2: TType2 = {
    flying() {

    },
    swimming() {

    }
}

export {}