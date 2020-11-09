var vals = [13, 23, 33, 43, 53, 63, 73, 83, 9];
var examen = [26, 46, 66, 86, 106, 126, 146, 166, 18];
var output = map(vals, function(value){
  return value * 2;
});
for (let index = 0; index < vals.length; index++) {
  console.assert(typeof(output[index])===typeof(examen[index]));
  console.assert(output[index]==examen[index]);
}