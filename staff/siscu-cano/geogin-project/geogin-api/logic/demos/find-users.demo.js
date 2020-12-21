const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const {
    env: { MONGODB_URL }
} = process
const { mongoose } = require('geogin-data')
const { models: { User } } = require('geogin-data')
const findUsers = require('../find-users')

    ; (async () => {
        try {
            await mongoose.connect(MONGODB_URL, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            })
            const user = await findUsers('aa')
            console.log(user)
        } catch (error) {
            console.error(error)
        } finally {
            mongoose.disconnect()
        }
    })()
