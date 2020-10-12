var vals = [10, 10, 14, 20];

var output = reduce(vals, function(total, num){
  return total + num;
});
console.log("\nDemo función reduce");
console.log("Suma del reduce: "+output);