require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const toggleFoodUserDiet = require('./toggle-food-user-diet')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        toggleFoodUserDiet('5fc5147415ee83679fad5205', '5fc6298dd855a20e283444a5')
        .then(() => console.log('The food was added'))
        .catch(error => console.log('could not add the requested food', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})