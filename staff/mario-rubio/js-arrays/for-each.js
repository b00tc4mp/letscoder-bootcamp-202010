function forEach(array, expression) {    
    if (!(arr instanceof Array)) throw new TypeError ( arr + " is not an array")
    if (typeof expression !== "function") throw new TypeError (expression + " is not a function")

    for (var i = 0; i < array.length; i++) {
        var item = array[i]

        expression(item)
    }
}

var arr = [1,2,3,4,5]
forEach(arr, function(value){
    console.log(value*5 +""+ "nuevo resultado")

})

/*
var hola = forEach( [2,4,6,8],function(value){
    var result = arr[i*5]
})
console.log(result)
*/