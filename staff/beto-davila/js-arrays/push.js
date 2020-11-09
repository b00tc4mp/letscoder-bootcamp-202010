
var array = ['cerdo', 'gallina', 'perro', 'oveja'];

function push(arr, element) {

    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');

    arr[arr.length] = element;

    return arr.length;
 
    //console.log('New element:', element, arr);

}

push(array, 'vaca');

/*
try {
    mapFunction(cubeOfNumber, null);
} catch (error) {
    console.error(error);
}
*/