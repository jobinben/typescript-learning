// 1. 字面量赋值
interface IPerson {
    name: string,
    age: number
}

const info = {
    name: 'jobin',
    age: 18,
    gender: 'fale'
}

const p: IPerson = {
    name: 'jobin',
    age: 18,
    // gender: 'fale' 添加其他属性报错 
}

// 不报错，freshness类型擦除
const p2: IPerson = info


function printInfo(person: IPerson) {
    console.log(person)
}

printInfo(info) //函数调用会进行类型推导

printInfo({
    name: 'jobin',
    age: 18,
    // gender: 'fale' // 添加属性 会报错， 对象直接赋值是无法类型推导
})

// 2. 枚举的使用
enum Direction {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}

function turnDirection(direction: Direction) {
    // 枚举类型的值默认为0递增
    console.log(direction)
    switch (direction) {
        case Direction.LEFT:
            console.log('向左')
            break;
        case Direction.RIGHT:
            console.log('向右')
            break;
        case Direction.TOP:
            console.log('向上')
            break;
        case Direction.BOTTOM:
            console.log('向下')
            break;
        default:
            const bar: never = direction
            break;
    }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)





export { }