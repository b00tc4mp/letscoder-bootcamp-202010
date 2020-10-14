/*for (var i = 0; i < 10; i++) {
    console.log(i)
}*/

function forEach(index, limit) {
    if (index < limit) {
        console.log(index)
 
        forEach(++index, limit)
    }
}
 
 forEach(0, 10)

 // 2

 function forEach(array, callback, i) {
    i = i === undefined? 0 : i
    
    if (i < array.length) {
        callback(array[i])

        forEach(array, callback, i + 1)
    }
}

//['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇'].forEach(function(fruit) { console.log(fruit) })
forEach(['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇'], function(fruit) { console.log(fruit) }) 

VM88732:12 🍏
VM88732:12 🍎
VM88732:12 🍐
VM88732:12 🍊
VM88732:12 🍋
VM88732:12 🍌
VM88732:12 🍉
VM88732:12 🍇

// 3

function forEach(array, callback) {
    function forEach(array, callback, i) {
        if (i < array.length) {
            callback(array[i])

            forEach(array, callback, i + 1)
        }
    }

    forEach(array, callback, 0)
}

//['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇'].forEach(function(fruit) { console.log(fruit) }, 10)
forEach(['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇'], function(fruit) { console.log(fruit) }, 10) 

VM89976:14 🍏
VM89976:14 🍎
VM89976:14 🍐
VM89976:14 🍊
VM89976:14 🍋
VM89976:14 🍌
VM89976:14 🍉
VM89976:14 🍇

// 4

function _forEach(array, callback, i) {
    if (i < array.length) {
        callback(array[i])

        _forEach(array, callback, i + 1)
    }
}

function forEach(array, callback) {
    _forEach(array, callback, 0)
}

//['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇'].forEach(function(fruit) { console.log(fruit) }, 10)
forEach(['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇'], function(fruit) { console.log(fruit) }, 10) 
forEach([':)', ':]', ':}'], function(face) { console.log(face) }, 10) 
VM91390:14 🍏
VM91390:14 🍎
VM91390:14 🍐
VM91390:14 🍊
VM91390:14 🍋
VM91390:14 🍌
VM91390:14 🍉
VM91390:14 🍇
VM91390:15 :)
VM91390:15 :]
VM91390:15 :}

// 5

function buildForEach() {
    function forEach(array, callback, i) {
        if (i < array.length) {
            callback(array[i])

            forEach(array, callback, i + 1)
        }
    }

    return function(array, callback) {
        forEach(array, callback, 0)
    }
}

var forEach = buildForEach()

//['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇'].forEach(function(fruit) { console.log(fruit) }, 10)
forEach(['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇'], function(fruit) { console.log(fruit) }, 10) 
forEach([':)', ':]', ':}'], function(face) { console.log(face) }, 10) 

// 6

var forEach = (function() {
    function forEach(array, callback, i) {
        if (i < array.length) {
            callback(array[i])

            forEach(array, callback, i + 1)
        }
    }

    return function(array, callback) {
        forEach(array, callback, 0)
    }
})()

//['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇'].forEach(function(fruit) { console.log(fruit) }, 10)
forEach(['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇'], function(fruit) { console.log(fruit) }, 10) 
forEach([':)', ':]', ':}'], function(face) { console.log(face) }, 10)