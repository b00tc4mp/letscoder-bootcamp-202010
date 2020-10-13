
var array = ['cerdo', 'gallina', 'perro'];

function push(arr, element) {

    arr[arr.length] = element;
 
    console.log('New element:', element, arr);

}
push(array, 'vaca');