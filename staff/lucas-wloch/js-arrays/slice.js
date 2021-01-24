function slice(array, start, end){
    var result = []
   
    if (start === undefined) start = 0
    if (start < 0) start = array.length + start //si start es negativo 
    //le pasamos a start la longitud del array menos start
    if (end === undefined) end = array.length

    if (end < 0) end = array.length + end //si end es negativo es para 
    //restemos los ulttimos items entoonces le end a la cant de iteraciones del for

    for(var i=initial; i<limit ;i++){
        
        result[result.length] = array[i]
    }
    return result
}
// var cities = ["Barcelona", "London", "Buenos Aires", "Berlin", "New York", "Hong Kong", "Paris"]
// var hola = slice(cities, 1, 5)
// console.log(hola)