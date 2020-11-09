
// ...WORK IN PROGRESS...

// Only passing 1 item. On this demo, we are passing 'May'.

var months = ['Jan', 'March', 'April', 'June'];

function splice(arr, start, deleteCount, item) {
    if (deleteCount === 0) {
    for ( var i = arr.length; i >= start; i--) {
    arr[i] = arr[i - 1];
    }
    arr[start] = item
    } else {
        var extracted = [];
        for (var i = start; i < start + deleteCount; i++) {
        extracted.push(arr[i])
        }
        arr[start] = item
        for (var i = start + deleteCount; i < arr.length; i++) {
        arr[i - 1] = arr[i]
            }
            arr.length = arr.length - (deleteCount - 1)
            return extracted
        }   
}
splice(months, 3, 1, 'May')