var countries = ['spain','france','portugal','ireland','italy'];

function buildingSlice(arr, start, limit) {
    debugger
    var newArr = [];

    for (var i = start; i < limit; i++) {


            newArr[newArr.length] = arr[i];

    }
    return newArr;
}

buildingSlice(countries, 1, 3); // DEMO
