function delay(callback, seconds) {
    /*
    var before = Date.now()

    //for(; (Date.now() - before)/1000 < seconds;) { debugger }

    while((Date.now() - before)/1000 < seconds) {
    //    debugger
    }

    callback()
    */

    setTimeout(callback, seconds * 1000)
}

delay(function() { console.log('hola mundo') }, 3)

console.log('fin')