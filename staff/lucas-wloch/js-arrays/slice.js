function slice(array, initial, limit){
    var result = []
    for(var i=initial; i<limit ;i++){
        
        result[result.length] = array[i]
    }
    return result
}
// var cities = ["Barcelona", "London", "Buenos Aires", "Berlin", "New York", "Hong Kong", "Paris"]
// var hola = slice(cities, 1, 5)
// console.log(hola)