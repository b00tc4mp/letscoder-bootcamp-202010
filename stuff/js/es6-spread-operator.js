function print() {
    for (var value of arguments)
        console.log(value)
}

//print(1, 2, 3)

var a = [ 'O', 1, 'red' ]

print(...a)
VM1278:3 O
VM1278:3 1
VM1278:3 red
undefined
print('O', 1, 'red')
VM1278:3 O
VM1278:3 1
VM1278:3 red
undefined

// 2

var o = { a: 1, b: 2 }

var p = { ...o, c: 3 }
undefined
p
{a: 1, b: 2, c: 3}

// 3

var o = { a: 1, b: 2 }

var p = { ...o, b: 3 }
undefined
p
{a: 1, b: 3}