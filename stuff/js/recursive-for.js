/*for (var i = 0; i < 10; i++) {
    console.log(i)
}*/

function forEach(index, limit) {
    if (index < limit) {
        console.log(index)
 
        forEach(++index, limit)
    }
}
 
 forEach(0, 10)