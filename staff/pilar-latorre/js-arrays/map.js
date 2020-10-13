
var arr = [1, 2, 3, 4, 5]

function map(arr, expression){
    if (!(arr instanceof Array)) throw new TypeError ( arr + ' this is not an array')
    if (typeof expression !== 'function') throw new TypeError (expression + ' is not a function' )

    var newarr = []
    for (var i = 0; i < arr.length; i++) {
        newarr.push(expression(arr[i]) )
        
    
    } return newarr
}

