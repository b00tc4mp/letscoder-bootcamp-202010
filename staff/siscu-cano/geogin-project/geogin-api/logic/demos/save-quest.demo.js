const { mongoose } = require('geogin-data')
const saveQuest = require('../save-quest')
const { random } = Math

MONGODB_URL = 'mongodb://localhost:27017/geogin-app'

mongoose
  .connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => saveQuest('5fd4a64cc8d94aae90916043', '5fd51457d41a6a9645b1c675','Titulo'))
  .then(console.log)
  .catch(console.error)
  .then(mongoose.disconnect)
