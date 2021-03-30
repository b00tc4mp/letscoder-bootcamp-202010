function print(...values) {
    for (var value of values) console.log(value)
}

print(1, 2, 3)
VM1998:2 1
VM1998:2 2

// 2

function print(x, y, ...values) {
    console.log(x, y)

    for (var value of values) console.log(value)
}

print(1, 2, 'a', 'b', 'c')

print(3, 4, true, false)
VM2093:2 1 2
VM2093:4 a
VM2093:4 b
VM2093:4 c
VM2093:2 3 4
VM2093:4 true
