function forEach(array, expression) {    
    for (var i = 0; i < array.length; i++) {
        var item = array[i]

        expression(item)
    }
} 