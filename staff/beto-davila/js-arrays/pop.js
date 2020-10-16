
console.log('This is a function that recreates the pop method');

function buildingPop(arr) {
    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.'); 

    var element = arr[arr.length - 1];

    for (var i = 0; i < arr.length; i++) { 
        
        if  (i == arr.length - 1) {

            arr.length = arr.length - 1;


        }       
    }
    return element;
}
