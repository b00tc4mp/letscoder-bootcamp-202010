console.log("MAP DEMO")
var vals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("multiply numbers * 3 in array", vals)

var output = map(vals, function(value){
    return value *3;
});
// es lo mismo que var output = map(vals, function(value){return value *3;});
console.log(output);

var hola = map([0, 2, 4, 6, 8, 10], function(value){return value + 2});
console.log(hola)

// var hola = map(vals, function(value){return 10 - value })
// console.log(hola)

// console.log("should fail on number argument as array")
// try {
//     map(1 , console.log)
// } catch (error) {
//     console.error(error)
// }

// console.log("should fail on undefined argument as array")
// try {
//     map( undefined, console.log)
// } catch (error) {
//     console.error(error)
// }
// try {
//     map( [1, 2, 3, 4, 5], function(value){return value * 2})
// } catch (error) {
//     console.error(error) // muestra en rojo en la consola
// }










// console.log('should fail on argument true as array')

// try {
//     forEach(true, console.log)
// } catch (error) {
//     console.error(error)
// }