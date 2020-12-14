const  {model} = require('mongoose')
const {user,product}= require('./schemas')

module.exports= {
    User: model('User',user),
    Product: model('Product', product)
}