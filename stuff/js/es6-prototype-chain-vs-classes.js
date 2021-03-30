function Person(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

Person.prototype.salute = function() { 
    return this.name + ': hello!'
}

Person.prototype.toString = function() {
    return 'My name is ' + this.name + ', I am ' + this.age + ' years old, and I am a ' + this.gender
}

Person.prototype.pee = function() { return '💧' }

Person.prototype.poo = function() { return '💩' }

/*
var pepito = new Person('Pepito', 20, 'male')
var mary = new Person('Mary', 25, 'female')
var john = new Person('John', 24, 'male')
var andy = new Person('Andy', 26, 'male')
var mika = new Person('Mikaela', 25, 'female')
var candelaria = new Person('Candelaria', 20, 'female')
*/

function Female(name, age) {
    Person.call(this, name, age, 'female')
}

//Female.prototype = new Person
Female.prototype = Object.create(Person.prototype)
Female.prototype.constructor = Female
//Female.prototype.pee = function() { return '[](💧)'}
Female.prototype.period = function()  { return '🩸' }

function Male(name, age) {
    Person.call(this, name, age, 'male')
}

//Male.prototype = new Person
Male.prototype = Object.create(Person.prototype)
Male.prototype.constructor = Male
//Male.prototype.pee = function() { return '[](O) 💧'}
Male.prototype.beard = function() { return '🧔🏻' }

var pepito = new Male('Pepito', 20)
var mary = new Female('Mary', 25)

console.log(pepito instanceof Female)
console.log(pepito instanceof Male)

console.log(pepito.pee())
//console.log(pepito.poo())
console.log(mary.pee())

var candelaria = new Person('Candelaria', 20, 'female')


console.log(candelaria.__proto__.constructor)
console.log(candelaria.__proto__.__proto__.constructor)

console.log(mary.__proto__.constructor)
console.log(mary.__proto__.__proto__.constructor)
console.log(mary.__proto__.__proto__.__proto__.constructor)

// classes

class Person {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    salute() { 
        return this.name + ': hello!'
    }

    toString() {
        return 'My name is ' + this.name + ', I am ' + this.age + ' years old, and I am a ' + this.gender
    }

    pee() { return '💧' }

    poo() { return '💩' }
}

const pepito = new Person('Pepito', 25, 'male')

class Female extends Person {
    constructor(name, age) {
        super(name, age, 'female')
    }

    period()  { return '🩸' }
}

const mary = new Female('Mary', 25)

class Male extends Person {
    constructor(name, age) {
        super(name, age, 'male')
    }

    beard() { return '🧔🏻' }
}

const john = new Male('John', 20)

pepito.__proto__.constructor instanceof Function
true
mary.__proto__.constructor
class Female extends Person {
    constructor(name, age) {
        super(name, age, 'female')
    }

    period()  { return '🩸' }
}
mary.__proto__.__proto__.constructor
class Person {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    salute() { 
        return this.name + ': hello!'
    }

    toSt…