// 通过类型(type)别名来声明对象类型
// type InfoType = {name: string, age: number}

// 另外一种方式声明对象类型: 接口interface
// 它类似于c语言的struct 定义 结构体一样

interface IInfoType{
    readonly name: string
    age: number
    friend?: {
        name: string
    }
}

const info: IInfoType = {
    name: 'jobin',
    age: 18
}


export{}