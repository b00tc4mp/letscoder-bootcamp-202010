console.log(1, 'declare delay', new Date)

function delay(callback, seconds) {
    /*
    var before = Date.now()

    //for(; (Date.now() - before)/1000 < seconds;) { debugger }

    while((Date.now() - before)/1000 < seconds) {
    //    debugger
    }

    callback()
    /**/

    console.log(3, 'register timer for delay', new Date)

    setTimeout(callback, seconds * 1000)
}

console.log(2, 'invoke delay', new Date)

delay(function() { console.log(4, 'hola mundo', new Date) }, 3)

console.log(5, 'register timer for block', new Date)

setTimeout(function() {
    console.log(6, 'block', new Date)

    var before = Date.now()

    while((Date.now() - before)/1000 < 4) { 
    //    debugger
    }    

    console.log(7, 'unblock', new Date)
}, 2 * 1000)

console.log(8, 'fin', new Date)
VM11483:1 1 "declare delay" Mon Oct 19 2020 11:56:08 GMT+0200 (Central European Summer Time)
VM11483:21 2 "invoke delay" Mon Oct 19 2020 11:56:08 GMT+0200 (Central European Summer Time)
VM11483:16 3 "register timer for delay" Mon Oct 19 2020 11:56:08 GMT+0200 (Central European Summer Time)
VM11483:25 5 "register timer for block" Mon Oct 19 2020 11:56:08 GMT+0200 (Central European Summer Time)
VM11483:39 8 "fin" Mon Oct 19 2020 11:56:08 GMT+0200 (Central European Summer Time)
undefined
VM11483:28 6 "block" Mon Oct 19 2020 11:56:10 GMT+0200 (Central European Summer Time)
VM11483:36 7 "unblock" Mon Oct 19 2020 11:56:14 GMT+0200 (Central European Summer Time)
[Violation] 'setTimeout' handler took 4000ms
VM11483:23 4 "hola mundo" Mon Oct 19 2020 11:56:14 GMT+0200 (Central European Summer Time)