// let's make dirt the global scope

var x = Math.PI/4

var result = Math.cos(x)

console.log(result)

// let's keep the global scope clean

(function() {
    var x = Math.PI/4

    var result = Math.cos(x)

    console.log(result)
})()