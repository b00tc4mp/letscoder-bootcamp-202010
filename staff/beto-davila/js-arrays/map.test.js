console.log('Testing MAP');

nums = [1, 2, 3, 4, 5];

mapFunction(cubeOfNumber, nums);

var result = [];

function cubeOfNumber(element) {
    return result.push(element ** 3);
}


console.assert(result.length === nums.length);

for (var i = 0; i < result.length; i++) {
    console.assert(result[i] === nums[i] ** 3);

}

var _error;

try {
    mapFunction(null, callback);
} catch (error) {
    _error = error;
}

console.assert(_error !== undefined);
console.assert(_error.message === 'null is not an array');

var _error;

try {
    mapFunction(1, callback);
} catch (error) {
    _error = error;
}

console.assert(_error !== undefined);
console.assert(_error.message === '1 is not an array');






