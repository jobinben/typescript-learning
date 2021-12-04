interface ISwim {
    swimming: () => void
}

interface IEat {
    eating: () => void
}

// 类实现接口
class Animal {

}


// 继承: 只能实现单继承
// 实现: 实现接口，类可以实现多个接口

class Fish extends Animal implements ISwim, IEat {
    swimming() { }
    eating() { }
}

class Person implements IEat {
    eating() { }
}

// 编写一些公共的API: 面向接口编程
function eatAction(eatable: IEat) {
    eatable.eating()
}

// 1. 所有实现了接口的类对应的对象，都是可以传入
eatAction(new Fish())

eatAction(new Person())

// 也可以直接传入对象 符合接口的
eatAction({eating(){}})

export {}