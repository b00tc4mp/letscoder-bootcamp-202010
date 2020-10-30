var o = { a: 1 }

var fun = function() { console.log(this.a) }

/*
fun()

window.a

window.fun()

var a = 2

window.fun()

fun()

o.fun = fun

o.fun()

fun()

var run = function() { fun() }

run()

//

var run = function() { fun() }

o.run = run

o.run()

//

var run = function() { fun() }
var sun = function() { run() }


o.sun = sun

o.sun()
*/

// 2

window.a = 0

var o = { a: 1 }

//var fun = function() { console.log(this.a) }
var fun = () => { console.log(this.a) }
//var fun = function() { console.log(this.a) }.bind(this)

/*
function bind(func, ctx ) {
    debugger

    return function() {
        debugger

        return func.apply(ctx, arguments)
    }
}

var fun = bind(function() { console.log(this.a) }, this)
*/

fun() // window.fun()

o.fun = fun

o.fun()

// 3

window.name = 'Window'

var o = { name: 'O' }

//var salute = function(salutation) { console.log(salutation, this.name) }
//var salute = salutation => { console.log(salutation, this.name) }
//var salute = function(salutation) { console.log(salutation, this.name) }.bind(this)

/**/
function bind(func, ctx) {
    //debugger

    return function() {
        //debugger

        return func.apply(ctx, arguments)
    }
}

//var salute = bind(function(salutation) { console.log(salutation, this.name) }, this)
/**/

/*
salute('hello') // window.salute('hello')

o.salute = salute

o.salute('hi')
*/

var p = { name: 'P' }

var salute = bind(function(salutation) { console.log(salutation, this.name) }, p)

/*
salute('hello')

o.salute = salute

o.salute('hi')
*/

var q = { name: 'Q' }

salute = bind(salute, q)

salute('hello')

o.salute = salute

o.salute('hi')
