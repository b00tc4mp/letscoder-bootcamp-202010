require('dotenv').config()

const mongoose = require('mongoose')
const toggleLikePictogram = require('./toggle-like-pictogram')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true})

    .then(() => toggleLikePictogram( '5fca113a7be0e23dacaba656', '5fcd120b20fb2c1c38bbb988'))
    .then(() => console.log ('like saved'))
    .catch( error => console.error('error', error))
    .then(() => client.close())
    .catch(mongoose.disconnect)