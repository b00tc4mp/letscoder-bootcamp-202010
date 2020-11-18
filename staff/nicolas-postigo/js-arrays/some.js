function some (array, callback){
    for (var i = 0; i < array.length; i++){
        console.log("hola")
        if (callback(array[i])){
            return true;
        }        
    }
    return false;
}