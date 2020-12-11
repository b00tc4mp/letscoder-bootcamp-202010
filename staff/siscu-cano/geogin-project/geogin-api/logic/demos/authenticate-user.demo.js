require('dotenv').config()

const { models: { User } } = require('geogin-data')
const authenticateUser = require('./authenticate-user')

const {
  env: { MONGODB_URL }
} = process

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
