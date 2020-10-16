[1,2,3,4,5].reduce (function(accum, element) {
    return accum + element
})

var cart = ( { name: "levis", price: 60,}, {name: "jacket", price: 100}, {name: "shocks", price: 15 }  )

cart.reduce (function (accum,product) {
    return accum + product.price
})

function reduce( array, callback, initialValue) {
    var accum = initialValue
    for ( var i = 0; i< array.lenght; index++) {
        for var element = array[index]

        accum = callback(accum, element)
    }
 return accum
}