require('dotenv').config()

const mongoose = require('mongoose')
const saveProduct = require('./save-product')
const { Product, User } = require('../models')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })    
    .then(() => Promise.all([
        saveProduct(undefined,'5fc6655aa3f1aa1d54dc8455','Cerveza', 'Cerveza artesanal', '25').then(console.log).catch(console.error),
])
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))