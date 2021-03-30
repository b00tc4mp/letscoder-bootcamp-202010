function Person(name, age, country) {
    this.name = name
    this.age = age
    this.country = country
}

var p = new Person('Pepito', 12, 'Groenlandia') // invoke constructor Person to build up the instance
var q = new Person('Maria', 20, 'Filipinas') // invoke constructor Person to build up the instance

console.log(p)
console.log(q)

var r = {} // new Object

Person.call(r, 'Roberto', 34, 'Germany') // invoke constructor Person to assign properties

console.log(r)

var s = { name: 'Sergei', age: 23, countri: 'Russia' } // WARN! error-prone -> 'countri'

console.log(s)