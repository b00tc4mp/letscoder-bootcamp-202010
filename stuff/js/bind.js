var mary = { 
    name: 'Mary', 
    toString() { return `i am ${this.name}` }
}

//mary.toString()

var john = {
    name: 'John'
}

//mary.toString.call(john)

//mary.toString.apply(john)

//john.toString = mary.toString
//john.toString()

//var printJohn = mary.toString.bind(john)

//printJohn()
//"i am John"

function bind(func, ctx) {
    return function() {
        return func.call(ctx)
    }
}

var printJohn = bind(mary.toString, john)

printJohn()
"i am John"

var peter = { name: 'Peter' }

var printPeter = bind(mary.toString, peter)

printPeter()
"i am Peter"

// 2

var mary = { 
    name: 'Mary', 
    toString() { return `i am  ${this.name}` },
    salute(salutation) { return `${salutation} ${this.name}!` }
}

//mary.salute('hola')
mary.salute('bye')

var anna = { name: 'Anna' }


//var saluteAnna = mary.salute.bind(anna)

//saluteAnna('good bye')

/*
function bind(func, ctx) {
    return function() {
        return func.call(ctx)
    }
}
*/

//var saluteAnna = bind(mary.salute, anna)

//saluteAnna('good bye')
// undefined Anna!

function bind(func, ctx) {
    return function() {
        //return func.call(ctx, ...arguments)
        return func.apply(ctx, arguments)
    }
}

var saluteAnna = bind(mary.salute, anna)

saluteAnna('good bye')

var peter = { name: 'Peter' }

var salutePeter = bind(saluteAnna, peter)

salutePeter('good bye')

"good bye Anna!"