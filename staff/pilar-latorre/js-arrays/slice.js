var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

//animals.slice(3)
//animals.slice() === animals
//animals.slice(-2) // 3
//animals.slice(1, -2) // 4
//animals.slice(-3, -1)

function slice(array, start, end) {
    var result = []

    if (start === undefined) start = 0 // 1

    if (start < 0) start = array.length + start // 3

    if (end === undefined) end = array.length // 2

    if (end < 0) end = array.length + end // 4

    for (var i = start; i < end; i++)
        result[i - start] = array[i]

    return result
}

//slice(animals, 2, 4)
//slice(animals, undefined, 4) // 1
//slice(animals, 2) // 2
//slice(animals, -2) // 3
//slice(animals, 1, -2) // 4
slice(animals, -3, -1)