console.log('DEMO some');

array = [3, 4, 5, 8, 10];

console.log('show if some value is bigger than 10', array);

var result = some (array, function(value){
    return value > 25
});
console.log(result);


array = ['house', 'penthouse', 'atic']

console.log('show if theres some value that match with word house')

var result = some (array, function(value){
    return value === 'house'
})

console.log(result)