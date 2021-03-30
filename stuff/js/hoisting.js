// with variables

var x = 1;

(function() {
    console.log(x)
})()

// 2

var x = 1;

(function() {
    console.log(x)

    var x
})()

// 3

var x = 1;

(function() {
    var x

    console.log(x)
})()

// 4

var x = 1;

(function() {
    console.log(x)

    var x = 2
})()

// 5

var x = 1;

(function() {
    var x

    console.log(x)

    x = 2
})()

// with functions

fun()


function fun() { return 'wtf' }

// 2

var fun

fun()

fun = function() { return 'wtf' }

// 3

var fun

//fun()

fun = function() { return 'wtf' }

fun()