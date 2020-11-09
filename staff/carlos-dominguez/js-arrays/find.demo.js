var vals = [23, "qwes", 76, 1];
var output = find(vals, function(value){
  return value == "asd";
});
console.log("\nDemo función find");
console.log("Estoy buscando: 'asd'");
console.log("¿Que encuentro? "+ output);