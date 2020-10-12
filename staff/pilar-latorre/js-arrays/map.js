
var arr = [1, 2, 3, 4, 5]

function map(arr, expression){
    debugger
    var newarr = []
    for (var i = 0; i < arr.length; i++) {
        newarr.push(expression(arr[i]) )
        
    
    } return newarr
}
