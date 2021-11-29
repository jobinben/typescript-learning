// 1. any 类型
let message: any = 123

message = 'hello TS'
console.log(message)


// 2. unknown 类型 : but unknown类型只能赋值给any和unknown类型
function foo(): string {
    return 'string'
}

function bar(): number {
    return 123
}
let result: unknown
if(true) {
    result = foo()
} else {
    result = bar()
}

// let setString: string = result // bad
// let setNumber: number = result // bad
let setAny:any = result // good
console.log(setAny)

// 3. void 类型
function foo1(num1: number, num2: number):void {}
function foo2(){}

// 4. never 类型
function foo3(): never {
    // 死循环
    while(true) {
        
    }
}

function foo4(): never {
    throw new Error()
}

// 封装一个核心函数
function handleMessage(message: string | number | boolean) {
    switch (typeof message) {
        case 'string':
            console.log('处理string')
            break
        case 'number':
            console.log('处理number')
            break
        case 'boolean':
            console.log('处理boolean')
            break
        default:
            const check: never = message
    }
}

handleMessage('abc')
handleMessage(123)
handleMessage(true)


// 5. tuple 元组类型: 多种元素的组合
const info: [string, number, boolean] = ['abc', 123, true]
const name: string = info[0]
console.log(name.length)

// tuple 应用

function useState(state: any) {
    let currentState = state
    const changeState = (newState: any) => {
        currentState = newState
    }
    const tuple: [ any, (newState: any) => void] = [currentState, changeState]
    return tuple
}

// tuple test
const [counter, setCounter] = useState(10)

const [title, setTitle] = useState('title')

// tuple 应用 泛型优化 自动推导出类型

function useTState<T>(state: T) {
    let currentState = state
    const changeState = (newState: T) => {
        currentState = newState
    }
    const tuple: [ T, (newState: T) => void] = [currentState, changeState]
    return tuple
}

// tuple test
const [tCounter, setTCounter] = useTState(10)

const [tTitle, setTTitle] = useTState('title')

const [flag, setFlag] = useTState(false)


// 6. 对象类型
function printPoint(point: {x: number, y: number}) {
    console.log('x: ', point.x)
    console.log('y: ', point.y)
}

printPoint({x: 10, y: 20})

// 7. 可选类型
function printPointX(point: {x: number, y?: number}) {
    console.log('x: ', point.x)
    point.y && console.log('y: ', point.y)
}

printPointX({x: 9})

export {}