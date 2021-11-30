// public private protected 三个修饰符 平时直接定义的就是public修饰

// 1. private
class Person{
    private name: string = '' // 该方法只能在内部访问

    // 可以通过方法供给外部方法
    getName() {
        return this.name
    }

    setName(newName: string) {
        this.name = newName 
    }
}

const p1 = new Person()
p1.setName('jobin')
console.log(p1.getName())

// 2. protected : 在类内部和子类中可以访问

class Animal{
    protected name: string = 'little Dog'
}

class Dog extends Animal {
    getName() {
        return this.name
    }
}

const dog = new Dog()
console.log(dog.getName())


export {}