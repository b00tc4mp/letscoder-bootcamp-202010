'use strict'

function add(a, b) {
    c = a + b
    //var c = a + b
    
    setTimeout(() => console.log(c))

    //console.log(c)
}

add(1, 2)
add(1, 3)
//debugger
/*
VM11569:4 Uncaught ReferenceError: c is not defined
    at add (<anonymous>:4:7)
    at <anonymous>:12:1
*/

// 2

window.ending = '!'

function Person(name) { this.name = name }

Person.prototype.salute = function(callback) {
    callback('hello ' + this.name)
}

p = new Person('P')

p.salute(function(salutation) { 
    console.log(salutation + this.ending) 
})
// hello P!

p.salute(function(salutation) { 
    'use strict'

    console.log(salutation + this.ending) 
})
/*
VM12962:18 Uncaught TypeError: Cannot read property 'ending' of undefined
    at <anonymous>:18:35
    at Person.salute (<anonymous>:6:5)
    at <anonymous>:15:3
*/


p.salute(function(salutation) { 
    'use strict'

    console.log(salutation + this.ending) 
}.bind({ ending: '!!!'}))
// hello P!!!

// 3

window.ending = '!'

class Person {
    constructor(name) { this.name = name }

    salute(callback) {
        callback('hello ' + this.name)
    }
}

p = new Person('P')

p.salute(function(salutation) { 
    console.log(salutation + this.ending) 
})
// hello P!

false && p.salute(function(salutation) { 
    'use strict'

    console.log(salutation + this.ending) 
})
/*
VM12962:18 Uncaught TypeError: Cannot read property 'ending' of undefined
    at <anonymous>:18:35
    at Person.salute (<anonymous>:6:5)
    at <anonymous>:15:3
*/


false && p.salute(function(salutation) { 
    'use strict'

    console.log(salutation + this.ending) 
}.bind({ ending: '!!!'}))
// hello P!!!

p.salute(salutation => { 
    console.log(salutation + this.ending) 
})
// hello P!
VM13544:14 hello P!
VM13544:39 hello P!
undefined