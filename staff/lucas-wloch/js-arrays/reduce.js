// [0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
//     return valorAnterior + valorActual;
//   });

//   function reduce(function(array[0],))
// var arr = [2,3,4,5,6,7,8,9]
// var sumas = arr.reduce(function(a,b){
//     return a + b
// })
    

// sumas
/*function reduce(arr, expression, initial){
    var result = 0
    if (initial === undefined){
        initial = null}
        
    for (var i = 0; i < arr.length; i++) {

        result = expression(arr[i], result)
        } 
        if (initial === undefined){ return result;}
           else{ return initial + result;}          
    }

*/ 

//CONS CISCU Y PILAR 
// function addElementArray(arra, initial){
//     var arra2 = [] 
//     arra2[0] = initial   
//     for (var i = 0; i < arra.length; i++){
//         arra2[i+1]=arra[i]
//     }
//     return arra2
// }


// function reduce(arr, expression, initial){
//     var result = 0
//     if (initial){arr = addElementArray(arr,initial)}            
//     for (var i = 0; i < arr.length; i++) {

//         result = expression(arr[i], result)
//         } 
//         return result
//     }
// FUNCION DE  MANU
    function reduce(array, callback, initialValue) {
        if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')  
    
        if (initialValue !== undefined) {
            var accum = initialValue
    
            for (var index = 0; index < array.length; index++) {
                var element = array[index]
    
                accum = callback(accum, element, index, array)
            }
    
            return accum
        } else {
            var accum = array[0]
    
            for (var index = 1; index < array.length; index++) {
                var element = array[index]
    
                accum = callback(accum, element, index, array)
            }
    
            return accum
        }
    }
   