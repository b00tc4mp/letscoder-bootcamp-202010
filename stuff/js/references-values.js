var pepito = {}

pepito.name = 'Pepito'
pepito.surname = 'Grillo'
"Grillo"
pepito
{name: "Pepito", surname: "Grillo"}
var fulanito = pepito
undefined
fulanito
{name: "Pepito", surname: "Grillo"}
fulanito.name = 'Fulanito'
"Fulanito"
fulanito
{name: "Fulanito", surname: "Grillo"}
pepito
{name: "Fulanito", surname: "Grillo"}name: "Fulanito"surname: "Grillo"__proto__: Object
var menganito = fulanito.surname
undefined
menganito
"Grillo"
fulanito.surname = 'Nito'
"Nito"
menganito
"Grillo"
pepito
{name: "Fulanito", surname: "Nito"}

// 2

var a = {}, b = {}
undefined
a === b
false
a == b
false
b = a
{}
a === b
true

// 3

function add(n, m) {
    return n + m
}

var a = 1, b = 2, c = add(a, b)


undefined
c
3

// 4

function fun(item) {
    item.n = 'N'

    return item
}

var a = 'a', o = {}, b = fun(a), p = fun(o)
undefined
b
"a"
p
{n: "N"}
o
{n: "N"}