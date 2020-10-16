var array = [5, 10, 15, 20 ,25]
var result = reduce(array, function(result, element){
    return result + element 
});



function reduce(array, callback, acumulado){

    var result = (acumulado !== undefined) ? acumulado : undefined

    for (var i = 0; i < array.length; i++){
        if (acumulado === undefined && i === 0){
        result = array[i] }else{
        result = callback(result, array[i], i, array)
        }
    }
return result
}
console.log(result)