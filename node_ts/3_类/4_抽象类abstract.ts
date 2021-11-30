

abstract class Animal { // 抽象类 子类如果定义构造器就必须调用构造父类的构造函数
   abstract action():void // 抽象方法 实现要求子类实现
}

class Dog extends Animal {
    name: string = 'ice'
    // constructor(name: string) {
    //     super() //继承抽象类 如果要用构造器 必须调用super()
    //     this.name = name
    // }

    action() { // 继承抽象类 必须定义它存在的方法 否则报错
        console.log(this.name , ' is running....')
    }
}

function makeAction( animal: Animal) {
    return animal.action()
}

const dog = new Dog()

makeAction(dog)