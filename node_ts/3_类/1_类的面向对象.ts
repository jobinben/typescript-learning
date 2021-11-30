// 封装 继承 多态 是面向对象的三个特点
// 1. 定义 - 封装
class Person {
    name: string // 必须
    age: number // 必须

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    eating() {
        console.log(this.name + ' eating')
    }
}

const p1 = new Person('jobin', 18)
console.log(p1.name, p1.age)
p1.eating()

// 2. 继承

class Student extends Person {
    sid: number
    constructor(name: string, age: number, sid: number) {
        // 调用超类/基类/父类的构造器
        super(name, age)
        this.sid = sid
    }

    study() {
        console.log('study...')
        super.eating() // 可以直接调用父类的方法
    }
}

const stu = new Student('dabing', 18, 181153)
stu.eating()
stu.study()

// 3. 多态 - override / overwrite 覆盖重写
class Animal {
    action() {
        console.log('animal action')
    }
}

class Dog extends Animal {
    action() {
        console.log('dog running!')
    }
}

class Fish extends Animal {
    action() {
        console.log('fish swimming!')
    }
}

class Cat extends Animal {

}

function makeActions(animals: Animal[]) {
    animals.forEach( animal => {
        animal.action()
    })
}

makeActions([new Dog(), new Fish(), new Cat()])

export {}