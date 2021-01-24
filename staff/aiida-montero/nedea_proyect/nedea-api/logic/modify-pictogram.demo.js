require('dotenv').config()

const modifyPictogram = require('./modify-pictogram')
const { models: { Pictogram} , mongoose} = require('nedea-data')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })    
    .then(() => Promise.all([
        modifyPictogram('5fd93976e6dbad37d8ca68c2','flores  Carmen Mari', 'pedidos mari' ).then(console.log).catch(console.error),
])
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))