console.log("Test For-Each");
console.log("multiply each number by 5 from array", nums);
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = [];

forEach(nums, function (value) {
  result.push(value * 5);
});

console.assert(nums.length === result.length);

for (var i = 0; i < nums.length; i++) {
  console.assert(result[i] === nums[i] * 5);
}

////////

var fail = undefined;

console.log("should fail when passing a 5 array");

try {
  forEach(5, function (value) {
    ///todo sale bien si esto falla
    result.push(value * 8);
  });
} catch (error) {
  fail = error;
}

console.assert(!(fail === undefined), "should fail");
console.assert(fail.message === "5 is not an array");
