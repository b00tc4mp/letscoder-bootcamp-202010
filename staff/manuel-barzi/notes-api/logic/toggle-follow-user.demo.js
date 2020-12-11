require('dotenv').config()

const { mongoose } = require('notes-data')
const toggleFollowUser = require('./toggle-follow-user')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => toggleFollowUser('5fd3a4243b9f59fc79f47803', '5fd3a42e3b9f59fc79f47805'))
    .then(console.log)
    .then(mongoose.disconnect)