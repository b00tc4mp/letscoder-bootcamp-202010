var explain = function() { return this }
undefined
var o = { name: 'O' }
undefined
var p = { name: 'P' }
undefined
explain()
Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
explain.call(o)
{name: "O"}
explain.call(p)
{name: "P"}
explain.apply(o)
{name: "O"}
explain.apply(p)
{name: "P"}

// 2

function salute(salutation) { return salutation + ' ' + this.name }
undefined
window.name = 'window'
salute('hello')
"hello window"
salute('hola')
"hola window"
salute('hallo')
"hallo window"
salute('privet')
"privet window"
window.name
"window"
var o = { name: 'O' }, p = { name: 'P' }
undefined
salute.call(o, 'ciao')
"ciao O"
salute.call(p, 'ciao')
"ciao P"
salute.call(p, 'ola')
"ola P"
salute.apply(o, ['ciao'])
"ciao O"
salute.apply(p, ['ciao'])
"ciao P"

// 3

function assign(name, age) {
    this.name = name
    this.age = age
}
undefined
assign('W', 24)
undefined
window.name
"W"
window.age
24
var o = {}, p = {}
undefined
assign.call(o, 'O', 23)
undefined
o
{name: "O", age: 23}
assign.call(p, 'P', 29)
undefined
p
{name: "P", age: 29}
assign.apply(o, ['OO', 233])
undefined
o
{name: "OO", age: 233}
assign.apply(p, ['PP', 299])
undefined
p
{name: "PP", age: 299}

// 4

function Person(name, age) {
    this.name = name
    this.age = age
}

//var pepito = new Person('Pepito', 45)

var pepito = {} // new Object
Person.call(pepito, 'Pepito', 45)

// 5

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.explain = function() {
    return 'i am ' + this.name + ', ' + this.age + ' years old'
}

var pepito = new Person('Pepito', 45)
var fulanito = new Person('Fulanito', 37)

pepito.explain()
"i am Pepito, 45 years old"
fulanito.explain()
"i am Fulanito, 37 years old"
pepito.explain === fulanito.explain
true
pepito.explain === Person.prototype.explain
true

// 6

if (typeof Array.prototype.random === 'undefined')
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]  
    }

var participants = ['Aida', 'Beto', 'Mario', 'Toño']

participants.random()