var values = []
function every(array, condition){
    for(let i=0; i<array.length;i++){
        element = array[i]
        var value = condition(element);
        values.push(value)
    }
    

}
