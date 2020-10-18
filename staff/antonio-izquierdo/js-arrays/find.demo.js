console.log('DEMO find')

var products = [
    {
        name: 'socks',
        price: 15
    },
    {
        name: 'jeans',
        price: 35
    },
    {
        name: 't-shirt',
        price: 15
    },
    {
        name: 'jacket',
        price: 65
    },
    {
        name: 'sweater',
        price: 55
    }
]

console.log('find product with price 65 in the 4th iteration from', products)

var result = find(products, function(product, index) {
    console.log(index)
    return product.price === 65
})

console.log(result)