// ts的命名空间的使用
// namespace 会创建一个属于自己的块级作用域
export namespace time {
    export function format(time: string) {
        return '2021-12-04'
    }
    
    export let name: string = 'jobin'
}

// 这样子就可以定义同样名字的函数
export namespace price {
    export function format(price: number) {
        return '666.999'
    }
}


