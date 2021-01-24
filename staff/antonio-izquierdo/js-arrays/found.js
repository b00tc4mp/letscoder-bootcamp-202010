var num = [1, 2, 3, 4]

debugger
function found(array, element) {
    for (var i = 0; i < array.length; i++) {
        var result = ''
        if (element(array[i]) && array.length === 0) {
            return result + array[i]
        }
        else return array[i]
    }
}


