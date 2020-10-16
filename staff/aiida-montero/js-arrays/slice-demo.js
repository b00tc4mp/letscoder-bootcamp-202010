var result = []
function slice(array, initial, limit){
for (var i = initial; i < limit; i++) {

result[result.length] = array[i]
}
}
slice(nombres, 3, 4)
console.log(result)