console.log('DEMO find')

var array = [1, 2, 1, 6, 1, 5, 7]

console.log['return the first value bigger than 5']

var result = find (array, function(value){
    return value > 5
});
console.log(result);

var array = ['house', 'penthouse', 'atic'] 

console.log('return the first word that match with the param. house')

var result = find (array, function(value){
    return value === 'house'
})

console.log(result);