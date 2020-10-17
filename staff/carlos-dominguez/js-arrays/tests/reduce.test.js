var vals = [10, 10, 14, 20];
var output = reduce(vals, function(total, num){
  return total + num;
});
console.assert(output==54);
console.assert(typeof(output)==typeof(vals[2]));