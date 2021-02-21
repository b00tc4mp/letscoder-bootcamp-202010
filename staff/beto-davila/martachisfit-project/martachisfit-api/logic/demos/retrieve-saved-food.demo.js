require('dotenv').config()
const { mongoose } = require('martachisfit-data')

const { MONGODB_URL } = process.env

const retrieveSavedFood = require('../retrieve-saved-food')

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        try {
            retrieveSavedFood('5fd734c8b6095c69797e259f')
                .then(console.log)
                .then(result => { })
                .catch(error => console.log('could not find any saved food', error))
                .then(() => mongoose.disconnect())
                .then(() => console.log('client closed'))

        } catch (error) {
            console.log('validation error', error)
        }

    })