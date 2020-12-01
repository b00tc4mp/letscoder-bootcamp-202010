require('dotenv').config()

const mongoose = require('mongoose')
const registerUser = require('./register-user')
const { User } = require('../models')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => User.deleteMany())
    .then(() => Promise.all([
        registerUser('S.O.S Animalicos Zaragoza', 'sosanimalicos@mail.com', '123123123','Calle de Cristóbal Colón, 6, 8', 'Zaragoza', 693742521).then(console.log).catch(console.error),
        registerUser('S.O.S Animalicos Zaragoza', 'sosanimalicos@mail.com', '123123123','Calle de Cristóbal Colón, 6, 8', 'Zaragoza', 693742521).then(console.log).catch(console.error),
        registerUser('S.O.S Animalicos Zaragoza', 'sosanimalicos@mail.com', '123123123','Calle de Cristóbal Colón, 6, 8', 'Zaragoza', 693742521).then(console.log).catch(console.error),
        registerUser('Sociedad Canina de Aragón', 'sociedadcanina@mail.com', '123123123','Calle del Conde de Aranda, 32', 'Zaragoza', 976445094).then(console.log).catch(console.error),

      
    ])
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))