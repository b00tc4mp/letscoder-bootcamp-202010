function map (array, callback) {
    var result = []
    for (i = 0; i < array.length; i++) {
        result[i]=callback(array[i],i)
    }
return result;
}
