function find (array, callback){
    for(i=0; i < array.length; i++){
        if(callback(array[i])){
            return array[i]
        }
    }
    return "nothing"
}



