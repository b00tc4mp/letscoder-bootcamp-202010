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