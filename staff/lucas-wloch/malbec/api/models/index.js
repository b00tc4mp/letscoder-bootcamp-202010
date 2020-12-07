const { model } = require('mongoose')
const { userSchema, productSchema } = require('./schemas') 
const User = require('./User')
const Product = require('./Product')

module.exports = {
    User,
    Product
} 
