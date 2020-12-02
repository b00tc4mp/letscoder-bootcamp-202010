var vals1 = ["leon", "asdad", "leon", "leon"];
var output1 = every(vals1, function(value){
  return value == "leon";
});
var vals2 = [3, 3, 3, 3];
var output2 = every(vals2, function(value){
  return value == 3;
});
console.assert(output1 == false);
console.assert(output2 == true);
