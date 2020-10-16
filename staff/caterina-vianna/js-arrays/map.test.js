console.log("MAP TEST");

var nums = [1, 2, 3, 4, 5, 6];

console.log("turn array numbers into string", nums);

map(nums, function (value) {
  return value.toString();
});

// console.assert(false, "salta porque le di false");
console.assert(
  nums.length === result.length,
  "falla si el array tira map tiene diferente longitud que el original"
);
for (var i = 0; i < nums.length; i++)
  console.assert(result[i] === nums[i].toString(), "no funciona el mapeado");

console.log("should fail on undefined argument as a function");

var fail = undefined;

try {
  var result = map(nums);
} catch (error) {
  fail = error;
}

console.assert(
  fail !== undefined,
  "fail es undefined, entonces no funciona este test"
);
