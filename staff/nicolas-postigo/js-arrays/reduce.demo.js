function reduce(array, callback, initialValue) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')  

    if (initialValue !== undefined) {
        var accum = initialValue

        for (var index = 0; index < array.length; index++) {
            var element = array[index]

            accum = callback(accum, element, index, array)
        }

        return accum
    } else {
        var accum = array[0]

        for (var index = 1; index < array.length; index++) {
            var element = array[index]
        
            accum = callback(accum, element, index, array)
        }

        return accum
    }
}

console.log('DEMO reduce')

var nums = [1, 2, 3, 4, 5]

console.log('adds all numbers from', nums)

var result = reduce(nums, function(accum, element) {
    return accum + element
})

console.log(result)

var cart = [{ name: 'levis', price: 60 }, { name: 'jacket', price: 100 }, { name: 'cool socks', price: 15}]

console.log('calculates the total price from cart', cart)

var result = reduce(cart, function (accum, product) {
    return accum + product.price
}, 0)

console.log(result)




var array = [1, 2, 3, 4, 5]  
function multiparpor2(element){
    return element * 2
}
var result = []
for (var i=0; i > array.length; i++){
    result[i]= multiparpor2(array[i])
}


var array = [1, 2, 3, 4, 5]  
function multiparpor2(element){
    return element * 2
}
var result = []
for (var i=0; i > array.length; i++){
    result[i]= multiparpor2(array[i])
}
return result




var array = [1, 2, 3, 4, 5]

function multiplyBy10(element){
    return element * 10
}

function map(array, callback){
    
    var result = []

    for (var i = 0; i < array.length, i++) {
        result[i] = callback(array[i])
    }

    return result
}

var result = map(array, multiplyBy10)

