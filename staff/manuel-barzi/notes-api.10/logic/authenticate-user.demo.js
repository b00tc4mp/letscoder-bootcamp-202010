require('dotenv').config()

const { mongoose } = require('notes-data')
const authenticateUser = require('./authenticate-user')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => authenticateUser('gusanin@mail.com', '123123123_'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)