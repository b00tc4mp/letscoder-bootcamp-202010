var vals = ["asdad", "asdad", "asdad", "asdad"];
var output = every(vals, function(value){
  return value == "asdad";
});
console.log("\nDemo función every");
console.log("Antes: "+ vals);
console.log("Después "+ output);