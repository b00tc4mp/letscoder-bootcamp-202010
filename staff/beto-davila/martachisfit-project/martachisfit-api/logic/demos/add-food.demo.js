require('dotenv').config()

const mongoose = require('mongoose')
const addFood = require('./add-food')

const { env: { MONGODB_URL } } = process


mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        try {
            addFood('5fc516c9ba288e6806118a65', '5fc5df8177f00b7bdb88a6e1', 'avena', '100 gr.', 389, 66.3, 8, 7)
                .then(() => console.log('food added or updated'))
                .catch(error => console.error('food could not be added', error))
                .then(() => mongoose.disconnect())
                .then(() => console.log('connection closed'))
        } catch (error) {
            console.log('validation error', error)
        }
    })
