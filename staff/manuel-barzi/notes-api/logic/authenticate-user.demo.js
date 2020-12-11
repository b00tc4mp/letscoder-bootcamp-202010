require('dotenv').config()

const { mongoose } = require('notes-data')
const authenticateUser = require('./authenticate-user')

const { env: { MONGODB_URL } } = process;

(async () => {
    try {
        await mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

        const userId = await authenticateUser('pepi2@gri.com', '123123123')

        console.log(userId)
    } catch (error) {
        console.error(error)
    } finally {
        mongoose.disconnect()
    }
})()