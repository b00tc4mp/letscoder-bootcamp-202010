['a', 'b', 'c', 'a', 'b', 'b', 'a', 'c', 'a'].reduce(function(accum, value) {
    if (accum[value] === undefined) accum[value] = 1
    else accum[value]++

    return accum
}, {})


//{ a: 4, b: 3, c: 2 }

// 2

function gainMoney(money) {
    return money * 2
}

[1, 2, 3, 4, 5].reduce(gainMoney, 300)
9600

// 3

['a', 'b', 'c', 'a', 'b', 'b', 'a', 'c', 'a'].reduce(function(accum, value) {
    if (accum[value] === undefined) accum[value] = 1
    else accum[value]++

    return accum
}, {})
{a: 4, b: 3, c: 2}
function reduce(array, callback, accum) {
     for (var i = 0; i < array.length; i++) {
        accum = callback(accum, array[i])
     }

    return accum
}

reduce(['a', 'b', 'c', 'a', 'b', 'b', 'a', 'c', 'a'], function(accum, value) {
    if (accum[value] === undefined) accum[value] = 1
    else accum[value]++

    return accum
}, {})
{a: 4, b: 3, c: 2}