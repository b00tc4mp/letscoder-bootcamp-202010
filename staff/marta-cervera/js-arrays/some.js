function some(array, callback){
    result = [];
    for(var i = 0; i < array.length; i++){
        result = callback(array[i],[i]);
    } 

    return result;

}