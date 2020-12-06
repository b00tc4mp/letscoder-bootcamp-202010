require('dotenv').config()

const mongoose = require('mongoose')
const createQuest = require('../create-quest')

const { env: { MONGODB_URL } } = process


mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => createQuest("Mision en el parque", "../img/test.png", [1111,2222], [333,2222], new Date(), "public", true, [], [],"descrition", "5fcbffce7f06433c78f3193e"))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)