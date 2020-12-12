require('dotenv').config()

const mongoose = require('mongoose')
const { Movement } = require('../../models') 


const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Movement.insertMany([
            {name: 'Curl bíceps en polea alta', group: 'biceps', urlPathImg: 'https://res.cloudinary.com/beto-cloud-name/image/upload/c_scale,h_480/v1607773955/movimientos-musc/biceps/Screen_Shot_2020-12-12_at_12.51.44_hzdjfr.png'},
            {name: 'Curl bíceps alterno', group: 'biceps', urlPathImg: 'https://res.cloudinary.com/beto-cloud-name/image/upload/c_scale,h_480/v1607773953/movimientos-musc/biceps/Screen_Shot_2020-12-12_at_12.48.24_xkv416.png'},
            {name: 'Curl bíceps banco Scott', group: 'biceps', urlPathImg: 'https://res.cloudinary.com/beto-cloud-name/image/upload/c_scale,h_480/v1607773952/movimientos-musc/biceps/Screen_Shot_2020-12-12_at_12.50.20_dnkss5.png'},
            {name: 'Curl bíceps martillo', group: 'biceps', urlPathImg: 'https://res.cloudinary.com/beto-cloud-name/image/upload/c_scale,h_480/v1607773952/movimientos-musc/biceps/Screen_Shot_2020-12-12_at_09.50.15_ewqbcr.png'}
    ])
            .then(() => console.log('Group succesfully inserted'))
            .catch(error => console.error('There was an error: ', error))
            .then(() => mongoose.disconnect())
    })      