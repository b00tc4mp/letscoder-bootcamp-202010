require('dotenv').config()

const { mongoose } = require('geogin-data')
const { models: { User } } = require('geogin-data')
const authenticateUser = require('../authenticate-user')

MONGODB_URL = 'mongodb://localhost:27017/geogin-app'

console.log(process.env.MONGODB_URL);

;(async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
    const userId = await authenticateUser('aa@aa.aa', 'aa')
    console.log(userId)
  } catch (error) {
        console.error(error)
  } finally {
        mongoose.disconnect()
  }
})()
