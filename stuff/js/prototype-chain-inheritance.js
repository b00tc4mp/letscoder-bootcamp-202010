console.dir({})
console.dir([])
console.dir(function() {})
console.dir(new Date)

// 2

//function Person(name) { this.name = name }
var Person = new Function('name', 'this.name = name') 

console.log(Person.__proto__.constructor)

Person.prototype.salute = function() { return this.name + ': hello!' }

var p = new Person('Pepito')

console.log(p.__proto__.constructor)

console.log(p.salute())

var q = new Person('Qualo')

console.log(q.__proto__.constructor)

console.log(q.salute())
VM991:4 ƒ Function() { [native code] }
VM991:10 ƒ anonymous(name
) {
this.name = name
}
VM991:12 Pepito: hello!
VM991:16 ƒ anonymous(name
) {
this.name = name
}
VM991:18 Qualo: hello!
undefined
 p.__proto__ === Person.prototype
true
p.salute()
"Pepito: hello!"
q.salute()
"Qualo: hello!"
p.salute === q.salute
true
p.salute === Person.prototype.salute
true

// 3

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
//Female.prototype.pee = function() { return '[](💧)'}
Female.prototype.period = function()  { return '🩸' }

function Male(name, age) {
    Person.call(this, name, age, 'male')
}

//Male.prototype = new Person
Male.prototype = Object.create(Person.prototype)
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


// 4

function Shape(name) { this.name = name }

function Rombo() { Shape.call(this, 'rombo') }

Rombo.prototype = Object.create(Shape.prototype)
Rombo.prototype.constructor = Rombo

var s = new Shape('rombo')

var r = new Rombo()

console.log(s.__proto__.constructor)

console.log(r.__proto__.constructor)
VM8163:12 ƒ Shape(name) { this.name = name }
VM8163:14 ƒ Rombo() { Shape.call(this, 'rombo') }
undefined
s.__proto__.constructor
ƒ Shape(name) { this.name = name }
s.__proto__.__proto__.constructor
ƒ Object() { [native code] }
r.__proto__.constructor
ƒ Rombo() { Shape.call(this, 'rombo') }
r.__proto__.__proto__.constructor
ƒ Shape(name) { this.name = name }
r.__proto__.__proto__.__object__.constructor
VM8352:1 Uncaught TypeError: Cannot read property 'constructor' of undefined
    at <anonymous>:1:34
(anonymous) @ VM8352:1
r.__proto__.__proto__.__proto__.constructor
ƒ Object() { [native code] }


// 5

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