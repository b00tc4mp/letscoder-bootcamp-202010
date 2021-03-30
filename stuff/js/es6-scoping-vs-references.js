var characters = ['a', 'b', 'c']

for (var i = 0; i < characters.length; i++) { 
    var character = characters[i]
    
    console.log(character) 
}

var j = 0

while(j < characters.length) {
    var character2 = characters[j]

    console.log(character2)

    j++
}

if (true) {
    var character3 = 'm'
}

var option = 2

switch(option) {
    case 1:
        var character4 = 'o'

        break
    case 2:
        var character4 = 'p'
}

// 2

(function() {
    var hello = 'world'

    console.log(hello)
})()
VM604:4 world
undefined
hello
VM619:1 Uncaught ReferenceError: hello is not defined
    at <anonymous>:1:1

// 3

// es6

{
    let n = 1

    console.log(n)
}

{
    let n = 2

    console.log(n)
}


VM353:4 1
VM353:10 2
undefined
n
VM361:1 Uncaught ReferenceError: n is not defined
    at <anonymous>:1:1

// es5

(function() {
    var n = 1

    console.log(n)
})();

(function() {
    var n = 2

    console.log(n)
})();


VM335:4 1
VM335:10 2
undefined
n
VM347:1 Uncaught ReferenceError: n is not defined
    at <anonymous>:1:1