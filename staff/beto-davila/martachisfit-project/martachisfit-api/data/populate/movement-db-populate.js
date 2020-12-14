require('dotenv').config()

const mongoose = require('mongoose')
const { Movement } = require('../martachisfit-data') 


const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Movement.insertMany([
            {name: 'Elevación de talones de pie', group: 'gemelo', urlPathImg: 'https://res.cloudinary.com/beto-cloud-name/image/upload/c_scale,h_550,q_auto:best/v1607766355/movimientos-musc/gemelo/Screen_Shot_2020-12-12_at_10.05.18_qm9ylc.png'},
            {name: 'Elevación de talones, sentado', group: 'gemelo', urlPathImg: 'https://res.cloudinary.com/beto-cloud-name/image/upload/c_scale,h_550,q_auto:best/v1607790457/movimientos-musc/gemelo/Screen_Shot_2020-12-12_at_17.27.01_zxokln.png'},
            {name: 'Elevación de talones, sentado (con barra)', group: 'gemelo', urlPathImg: 'https://res.cloudinary.com/beto-cloud-name/image/upload/c_scale,h_550,q_auto:best/v1607790501/movimientos-musc/gemelo/Screen_Shot_2020-12-12_at_17.27.50_tiqm0v.png'}
    ])
            .then(() => console.log('Group succesfully inserted'))
            .catch(error => console.error('There was an error: ', error))
            .then(() => mongoose.disconnect())
    })      