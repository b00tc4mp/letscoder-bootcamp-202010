const { mongoose } = require('geogin-data')
const saveQuest = require('../save-quest')
const { random } = Math

MONGODB_URL = 'mongodb://localhost:27017/geogin-app'

// mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
//     .then(() => createQuest("Mision en el parque", "../img/test.png", { coordinates: [random() * 15 + 1, random() * 15 + 1]}, { coordinates: [random() * 15 + 1, random() * 15 + 1]}, new Date(), "public", true, [], [],"descrition", "5fcbffce7f06433c78f3193e"))
//     .then(console.log)
//     .catch(console.error)
//     .then(mongoose.disconnect)

mongoose
  .connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => saveQuest('5fd4a64cc8d94aae90916043'))
  .catch(error => console.error(error))
  .then(mongoose.disconnect)
