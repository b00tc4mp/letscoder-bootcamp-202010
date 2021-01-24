function reduce(arr, expression, initial) {
    var result = (initial === undefined) ? undefined : initial;
    for (var i = 0; i < arr.length; i++) {
        if (initial === undefined && i === 0) {
            result = arr[i];
        } else {
            result = expression(result, arr[i], i, arr);
        }
    }
    return result;
}