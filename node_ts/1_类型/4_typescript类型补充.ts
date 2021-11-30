// 1. 类型断言 as

class Person {

}

class Student extends Person {
    study() {

    }
}

function sayHello(p: Person) {
    // p.study()
    (p as Student).study()
}

const stu = new Student()
sayHello(stu)

// as any/unknown
const message: string = 'Hello TS'
// 断言转换类型前，要把其他类型转换为any或unknown
const num: number = (message as unknown) as number


// 2. 非空类型断言
// message?: -> undefined | string  可选类型 类似等于=> undefined | 类型
function printLength(message?: string) {
    console.log(message!.length)
}

printLength('hello')
// printLength(undefined)


// 3. 可选链的使用
type Person2 = {
    name: string,
    friend?: {
        name: string
    }
}

const xm: Person2 = {
    name: 'jobin',
}

console.log(xm.name)
console.log(xm.friend?.name) // 可选链 存在即打印

// 4. !! 和 ?? 运算符 

// !! -> 就是js的语法 双取反
const hi: string = 'hi TS'
const flag = !!hi
console.log(flag)
// ?? -> 等于js的三元运算 a ? a : b
let sayHi: string | null = null
const content = sayHi ?? 'hi TS'
console.log(content)

// 5. 字面量类型

// 'abc' 字符串也可以作为类型，叫做字面量类型。也就是你指定的值为类型
const printMsg: 'abc' = 'abc' // 所指定的值一定要等于字面量类型
const num2: 123 = 123

// 字面量类型的意义就是结合联合类型的话可以很灵活
type align = 'left' | 'right' | 'center'
let direction: align = 'left'
direction = 'right'
direction = 'center'
// direction = 'top' bad 不属于它的字面量类型 报错

// 6. 字面量推理
type Method = 'GET' | 'POST'
function request(url: string, method: Method) {

}

const options = {
    url: 'https://tuyoung.top',
    method: 'POST'
} as const

request(options.url, options.method)



// 7. 类型缩小

// 7.1 typeof的类型缩小
type idType = number | string
function printID(id: idType) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}
printID(123)
printID('hi ts')

// 7.2 平等的类型缩小 （===、 ==、 !== != switch）
type Direction = 'left' | 'right' | 'top' | 'bottom'
function printDirection(direction: Direction) {
    // 1.if判断
    // if (direction === 'left') {
    //   console.log(direction)
    // } else if ()

    // 2.switch判断
    // switch (direction) {
    //   case 'left':
    //     console.log(direction)
    //     break;
    //   case ...
    // }
}

// 7.3 instanceof
function printTime(time: string | Date) {
    if(time instanceof Date) {
        console.log(time.toUTCString())
    } else {
        console.log(time)
    }
}

class Student2{
    study(){}
}
class Teacher{
    teaching(){}
}

function work(p: Student2 | Teacher) {
    if(p instanceof Student2) {
        p.study()
    } else {
        p.teaching()
    }
}

const stu2 = new Student2()
work(stu2)

// 7.4 in

type Fish = {
    swimming: () => void
}

type Dog =  {
    running: () => void
}

function walk(animal: Fish | Dog) {
    if('swimming' in animal) {
        animal.swimming()
    } else {
        animal.running()
    }
}

const fish: Fish = {
    swimming() {
        console.log('swimming')
    }
}

walk(fish)

export { }
