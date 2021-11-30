class Person {
   name: string = '123'
   eating() {

   }
}

const p = new Person()

const p1: Person = {
    name: 'jobin',
    eating(){

    }
}

function printPerson(p: Person) {
    console.log(p.name)
}

printPerson(new Person())
printPerson(p1)
printPerson({name: 'dabing', eating(){}})

export {}