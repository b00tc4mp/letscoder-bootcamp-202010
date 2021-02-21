console.log('TEST Caray.prototype.ForEach()');
 
(function(){
    console.log (' should return the value multiply by 10')
    
    var c = new Caray
    c[0] = 5
    c[1] = 10
    c[2] = 15
    c[3] = 20
    c[4] = 25
    c.length = 5

    var iterations=  0
    
    

    c.forEach(function(element, index, arraytotal){
        console.log(element * 10)
            iterations ++
    
    console.assert(element * 10 === arraytotal [index] *10)
    
        
    })
console.assert(iterations === 5)
    })()

    





