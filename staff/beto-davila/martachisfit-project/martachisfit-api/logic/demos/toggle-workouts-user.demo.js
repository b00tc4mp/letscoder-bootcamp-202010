require('dotenv').config()

const { MONGODB_URL } = process.env

const { mongoose } = require('martachisfit-data')

const toggleWorkoutsUser = require('../toggle-workouts-user')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        toggleWorkoutsUser('5fd734c8b6095c69797e259f', 'advanced')
        .then(() => console.log('saved workout'))
        .catch(error => console.log('could not saved workout', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})