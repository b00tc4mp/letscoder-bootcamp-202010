console.log('DEMO map')

var vals = [1,2,3,4,5,6,7,8,9];



console.log('multiply numbers*3 in array', vals)

var output = map (vals,function(value){return value*3});

console.log (output);



console.log('return de result of 10-each value of de array', vals)

var hola =map (vals,function(value){return 10-value})
console.log (hola)


console.log('return the result of the value of de array plus 2', vals)

var hola = map([0, 2, 4, 6, 8, 10], function(value){return value + 2});
console.log(hola)