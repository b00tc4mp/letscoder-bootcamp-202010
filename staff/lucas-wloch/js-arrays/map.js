function map(array, callback){
    if (!(array instanceof Array)) throw new TypeError ( typeof array + " is not an array")
    if (typeof callback !== "function") throw new TypeError (typeof callback + " is not a function")
    // console.log(array[1])
    var newarr = []
    for(var i = 0; i<array.length; i++){
        // console.log(array[i])
        newarr.push(callback(array[i]))
        
    }
    return newarr
}


// var arr = [1, 2, 3, 4, 5]

// var result = map(arr,function(value){
//     return value + value;
// });
// console.log(result)