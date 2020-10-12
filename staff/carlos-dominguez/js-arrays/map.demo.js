var vals = [13, 23, 33, 43, 53, 63, 73, 83, 9];
// for(let i=0;i<vals.length;i++){
//   console.log(vals[i]);
// }
var output = map(vals, function(value){
  return value * 4;
});
console.log("\nDemo función map");
console.log("Antes: "+ vals);
console.log("Después "+ output);