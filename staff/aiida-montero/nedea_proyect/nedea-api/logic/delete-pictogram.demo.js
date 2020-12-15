require('dotenv').config()


const deletePictogram = require('./delete-pictogram')
const { models: { User } , mongoose} = require('nedea-data')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => Promise.all([
        deletePictogram('5fd89b158252802d2845ebe7', '5fd75ddce3c5611e205335f7').then(console.log).catch(console.error),
       
    ])
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))