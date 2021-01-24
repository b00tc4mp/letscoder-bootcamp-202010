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