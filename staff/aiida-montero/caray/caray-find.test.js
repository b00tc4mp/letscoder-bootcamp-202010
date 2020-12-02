console.log ("TEST caray.prototype.find");

(function (){ 
    console.log ("Debería encontrar números mayores de 25")

    var c = new Caray ()
    c[0] = {name:'Aida', age: 24 }
    c[1] = {name:'Marta', age: 28 }
    c[2] = {name:'Toño' , age: 25 }

    c.length = 3

    var iterations = 0
    var result = c.find(function(element,i,carayTotal) {
        if (element.age > 24)    
        iterations++
        return element.age > 24
    })
    console.log(result)

    console.assert(result.age === 28, "deberia devolver 28")
    console.log(result.name === c[1].name && result.age === c[1].age)


})()
