
 var someFunction = function some(arr, callback) {

    for (var i = 0; i < arr.length; i++) {
   
        if (callback(arr[i])) {
 
          return true
        }
     } 
     return false
 }
 
