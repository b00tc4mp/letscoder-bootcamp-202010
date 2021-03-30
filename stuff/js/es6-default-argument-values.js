function createCoords(x = 0, y = 0, z = 0) {
    return { x, y, z }
}

var o = createCoords(10, 10, 10)

console.log(o)

var p = createCoords(10, 5)

console.log(p)
VM1902:7 {x: 10, y: 10, z: 10}
VM1902:11 {x: 10, y: 5, z: 0}
