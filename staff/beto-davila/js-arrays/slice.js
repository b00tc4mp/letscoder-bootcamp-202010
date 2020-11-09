var countries = ['spain','france','portugal','ireland','italy'];

function buildingSlice(arr, start, end) {

    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array.');

    var newArr = [];

    if (start === undefined) start = 0;

    if (start < 0) start = arr.length + start;

    if (start > arr.length) return;

    if (end === undefined) end = arr.length;

    if (end < 0) end = arr.length + end;

    for (var i = start; i < end; i++) {

            newArr[newArr.length] = arr[i];

    }
    return newArr;
}

buildingSlice(countries, 3, 4); // DEMO
