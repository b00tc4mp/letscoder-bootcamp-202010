
// "Join" method joins all the elements within a matrix or similar and ouputs the final result

var salute = ['H', 'O', 'L', 'A', ' ', 'M', 'U', 'N', 'D', '0'];

function buildingJoin(arr) {

    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');

    var result = [];
  
    for (var i = 0; i < arr.length; i++) {

      result = result + arr[i];

    }
    return result;
}

buildingJoin(salute);