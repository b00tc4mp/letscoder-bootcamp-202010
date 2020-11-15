
var nums = [1, 2, 3, 4, 5]


var result = []

every(nums, function(value) {

    var value = 0 

    if (value < 10 ) result.push(value)
})
debugger;

function every(array, expression) {    
    for (var i = 0; i < array.length; i++) {
        var item = array[i]

        expression(item)
    }
} 

var value = arr.every(menor);  

function menor(element)  
{   
   return (element < 100);   
}    
var arr = [ 11, 89, 23, 7, 120 ];  
var value = arr.every(menor);  
console.log( value );




function menor(element)  
{   
   return (element === 100);   
}    
var arr = [ 12 ];  
var value = arr.every(menor);  
console.log( value );



















var lista = [100, 200, 300, 2]
function menor(numero) {
    for (var i = 0; i < lista.length; i++) {
    var numero = lista[i]
    if (numero === 2)
    return numero

}


var result = lista.every(menor)
console.log(result)









var lista = [100, 200, 300, 2]

function menor(numero) {
    for (i = 0; i < lista.lentgh; i++)
    var numero = lista[i]
    if (numero === 2)
    return numero

}


var result = lista.every(menor)
console.log(result)