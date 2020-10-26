function a() {
    console.log('a')

    return true
}

function b() {
    console.log('b')

    return true
}

a() && b()
VM5055:2 a
VM5055:8 b
true

// 2

function a() {
    console.log('a')

    return false
}

function b() {
    console.log('b')

    return true
}

a() && b()
VM5300:2 a
false

// 3

function a() {
    console.log('a')

    return true
}

function b() {
    console.log('b')

    return false
}

a() && b()
VM5493:2 a
VM5493:8 b
false

// 3.5

function a() {
    console.log('a')

    return false
}

function b() {
    console.log('b')

    return false
}

a() && b()
VM6131:2 a
false

// 4

function a() {
    console.log('a')

    return true
}

function b() {
    console.log('b')

    return true
}

a() || b()
VM5684:2 a
true

// 5

function a() {
    console.log('a')

    return false
}

function b() {
    console.log('b')

    return true
}

a() || b()
VM5789:2 a
VM5789:8 b
true

// 6

function a() {
    console.log('a')

    return true
}

function b() {
    console.log('b')

    return false
}

a() || b()
VM5927:2 a
true

// 7

function a() {
    console.log('a')

    return false
}

function b() {
    console.log('b')

    return false
}

a() || b()
VM6239:2 a
VM6239:8 b
false

// 8

function salute(name) {
    name = name || 'world'

    console.log('hello ' + name)
}

salute('Pepito')

salute()

salute(undefined)

salute(null)

salute('')

salute(0)

salute(false)

salute(1)

salute(true)
VM7124:4 hello Pepito
VM7124:4 hello world
VM7124:4 hello world
VM7124:4 hello world
VM7124:4 hello world
VM7124:4 hello world
VM7124:4 hello world
VM7124:4 hello 1
VM7124:4 hello true
