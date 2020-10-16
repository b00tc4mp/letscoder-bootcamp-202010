console.log('TEST forEach')
console.log('multiply each number by 5 from array', nums)

var nums = [1,2,3,4,5,6,7,8,9,10]
var result = []
forEach(nums, function(value){ 
    result.push (value*5)
})

console.assert(nums.length === result.length) // se pide que afirme mediante T o F lo que está entre ()

for(var i=0; i<nums.length; i++)
    console.assert(result[i]===nums[i]*5) //se comprueba cada elemento del array result (indicando su index) sea igual al elemento del array*5 






console.log ('should fail when passing a null as an array')
var fail = undefined

try{
    forEach (null, function(value){ //provocamos el erros indicando null, que es diferente al primer argumento del array en su definición (que sería array. Indicado en línea 1 del archivo for.each, y en la linea 2 pone la definición de cómo se indica el error)
    result.push(value*5) //en esta comprobación no sería relevante porque el error salta con el null
})
} catch(error){ //al detectar el null en try, lo manda al catch. Este error lo percibe pq se lo indicamos en la línea 2 del archivo for each (TypeError)
    fail = error // hace q el error apunte a fail y le asigna el valor indefinido
}

console.assert (!(fail === undefined)) //pedimos que nos afirme si fail es undefined, pero fail = error = y este error sí que está definido, luego (!(false))=true: se confirma mediante el asser q es cierto

////////////////////////////////////////



var fail = undefined

console.log ('should fail when passing a 5 as an array')
    
try{
    forEach(5, function(value){
    result.push(value*8)
})
} catch(error){
    fail = error
}

console.assert (!(fail === undefined), "should fail")
console.assert (fail.message === "5 is not an array")