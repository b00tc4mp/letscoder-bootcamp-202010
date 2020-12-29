const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const {
  env: { MONGODB_URL }
} = process
const { mongoose } = require('geogin-data')
const { models: { User } } = require('geogin-data')
const authenticateUser = require('../authenticate-user')


  ; (async () => {
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
