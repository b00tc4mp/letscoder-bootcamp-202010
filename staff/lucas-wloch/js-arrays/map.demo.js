console.log("MAP DEMO")
var vals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("multiply numbers * 3 in array", vals)

var output = map(vals, function(value){
    return value *3;
});
console.log(output);