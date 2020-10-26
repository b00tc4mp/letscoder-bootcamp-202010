var vals = [23, 56, 76, 1];
var output = find(vals, function(value){
  return value == "asd";
});
var vals2 = ["23", "qwes", "76", "1"];
var output2 = find(vals2, function(value){
  return value == "qwes";
});
console.assert(output==false);
console.assert(output2=="qwes");