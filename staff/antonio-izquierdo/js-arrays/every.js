function every(arr, expression){
    for (var i = 0; i < arr.length; i++) {
        
        if (!expression(arr[i])) return false
    }
    return true
}