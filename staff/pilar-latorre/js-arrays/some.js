var arr = [1, 2, 3, 4, 5]



function some(arr, expression){
    for (var i = 0; i < arr.length; i++) {
        
        if (expression(arr[i])) return true
    }
    return false
}
