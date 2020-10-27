var john = { name: 'John', age: 34 }

//var name = john.name
//var age = john.age

var { name, age } = john

console.log(name, age)

// 2

var a = [1, 2, 3]

var [x, y, z] = a

console.log(x, y, z)

// 3

var a = [1, 2, 3]

var [, y, z] = a

console.log(y, z)

// 4

var o = {
    a: [{
        b: {
            c: [{ hello: 'world' }]
        }
    }]
}

//var hello = o.a[0].b.c[0].hello
var { a: [{ b: { c: [{ hello}] } } ] } = o
console.log(hello)

// 5

var o = { x: 1, y: 2 }

var { x, y, z = 0 } = o

console.log(x, y, z)
VM1690