require('dotenv').config()

const { models: { User } } = require('geogin-data')
const createQuest = require('../create-quest')
const { random } = Math

MONGODB_URL = 'mongodb://localhost:27017/geogin-app'

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => createQuest("Mision en el parque", "../img/test.png", { coordinates: [random() * 15 + 1, random() * 15 + 1]}, { coordinates: [random() * 15 + 1, random() * 15 + 1]}, new Date(), "public", true, [], [],"descrition", "5fcbffce7f06433c78f3193e"))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)