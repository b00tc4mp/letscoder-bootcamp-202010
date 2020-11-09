var vals1 = ["leon", "asdad", "leon", "leon"];
var vals2 = [45, 4, 34, 53];
var output1 = some(vals1, function(value){
  return value == "leon";
});
var output2 = some(vals2, function(value){
  return value != 4;
});
console.assert(output1 == false);
console.assert(output2 == true);
