console.log('TEST Caray.prototype.push()');

(function() {
    console.log('debe enviar valores individuales, 10, verde, true, undefined')

    var c = new Caray()
    
    c.push(10)
    c.push('verde')
    c.push(true)
    c.push(undefined)
   
    console.assert(c.length === 4, 'la longitud del caray debe ser de 4')
    console.log(c)
    console.assert(c[0] === 10)
    console.assert(c[1] === 'verde')
    console.assert(c[2] === true)
    console.assert(c[3] === undefined)
})();

