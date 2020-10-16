
console.log('Testing POP');

console.log('La función "buildingPop" retorna el último elemento del array de ingredientes en este caso.')

var ingredients = ['salt', 'oil', 'vinegar', 'tomato', 'broccoli'];

buildingPop(ingredients);


var fail = undefined;

console.log('should fail on undefined argument as a function')

try {
    buildingPop(ingredients);
} catch (error) {
    fail = error;
}

console.assert(fail !== undefined, 'error should be defined');
console.assert(fail.message === 'undefined is not a function', 'error message should match');