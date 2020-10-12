var vals = ["leon", "asdad", "leon", "leon"];
var output = every(vals, function(value){
  return value == "leon";
});
console.log("\nDemo función every");
console.log("Antes: "+ vals);
console.log("Después "+ output);