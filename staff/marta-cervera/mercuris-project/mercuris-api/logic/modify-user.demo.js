require('dotenv').config()

const modifyUser = require('./modify-user')
const { models: { User } , mongoose} = require('mercuris-data')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })    
    .then(() => Promise.all([
        modifyUser('5fd8ed273bda9440c02d08b1','flores Mari Carmen', 'pedidos mari', 'calle hastalaminga', 'Burgos', '698778856' ).then(console.log).catch(console.error),
])
    )
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))