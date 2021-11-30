
// readonly 只读属性
class Person {
    // 1.只读属性是可以在构造器中赋值, 赋值之后就不可以修改
    // 2. 类似于const 属性本身不能进行修改, 但是如果它是对象类型, 对象中的属性是可以修改
    readonly name: string
    constructor(name: string) {
        this.name = name
    }
}

const p1 = new Person('jobin')
console.log(p1.name)
// p1.name = 'dabing'

// 访问器 getter/setter
class Animal {
    private _name: string
    constructor(name: string) {
        this._name = name
    }

    // 访问器
    // getter
    get name() {
        return this._name
    }

    // setter
    set name(newValue) {
        this._name = newValue
    }
}

const dog = new Animal('litte dog')
dog.name = 'dada'
console.log(dog.name)



export { }