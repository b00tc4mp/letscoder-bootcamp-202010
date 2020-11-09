function forEach(array, expression) {   
    if(!(array instanceof Array)) throw new TypeError(array + " is not an array")
    if(typeof expression !== "function") throw new TypeError(expression + " is not an fuction")
    
    for (var i = 0; i < array.length; i++) {
        
        expression(array[i])
    }
}
// var arr = [1,2,3,4,5]
// forEach(arr, function(value){
//    return console.log(value*2)
// }) 
// forEach(arr, function(value){
//     return console.log(value*3)
//  }) 
// console.log("should fail when second parameter is not a fuction")
// try {
//     var hola = forEach(arr)
//     console.log(hola)
// } catch (error) {
//     console.log(error)
// }
  
// console.log("should fail when second first is not an array")
// try {
//     var hola = forEach(1,function(value){
//         console.log(value)
//     })
//     console.log(hola)
// } catch (error) {
//     console.log(error)
// }
  
