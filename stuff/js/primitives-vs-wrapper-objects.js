var n = 2

console.log(n instanceof Number) // false

n.hola = 'mundo'

console.log(n) // 2

n = new Number(2)

console.log(n instanceof Number) // true

n.hola = 'mundo'

console.log(n) // Number { 2, hola: "mundo" }

// same for String, Boolean...