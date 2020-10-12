var vals = ["leon", "asdad", "leon", "leon"];
var output = some(vals, function(value){
  return value == "qwes";
});
console.log("\nDemo función some");
console.log("Antes: "+ vals);
console.log("Evualuando la palabra 'qwes' "+ output);