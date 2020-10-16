function find (array, callback){
    for(i=0; i < array.length; i++){
        if(callback(array[i])){
            return array[i]
        }
    }
    return "nothing"
}


var array = [12, 22, 33, 98, 109];
var result = reduce(array, function(result, element){
        return result + element
});

function reduce (array, callback, acumulado){
        result = 0
            (acumulado !== undefined) ? acumulado : undefined
            for (i = 0; i < array.length; i++){
                if(acumulado == undefined && i == 0){
                    return result}else{
                        acumulado[i]}
                }
            }    
}

console.log(result)


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


var array = [12, 22, 33, 98, 109];
var result = reduce(array, function(result, element){
        return result + element
});

function reduce (array, callback, acumulado){

            var result = (acumulado !== undefined) ? acumulado : undefined
            for (i = 0; i < array.length; i++){
                if(acumulado == undefined && i == 0){
                    result= array[i]}else{
                    result = callback(array, array[i], i, array)
                }
            }    
return result
}

console.log(result)
