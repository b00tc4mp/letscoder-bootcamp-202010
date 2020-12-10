function fun() {
    var console

    console.log('hola')
}

fun()
// VM3071:4 Uncaught TypeError: Cannot read property 'log' of undefined
//     at fun (<anonymous>:4:13)
//     at <anonymous>:7:1
// fun @ VM3071:4
// (anonymous) @ VM3071:7