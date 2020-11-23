const { validateEmail, validatePassword, validateCallback, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const context = require('./context')

const { env: { DB_NAME } } = process

module.exports = (fullname, email, password, repassword, callback) => {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    if(password !== repassword) throw new Error('passwords do not match')
    validateCallback(callback)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    semaphore(done => {
        users.findOne({ email }, (error, user) => {
            if (error) {
                done()

                return callback(error)
            }

            if (user) {
                done()

                return callback(new Error(`e-mail ${email} already registered`))
            }

            user = { fullname, email, password }

            users.insertOne(user, (error, result) => {
                if (error) {
                    done()

                    return callback(error)
                }

                done()

                callback(null)
            })
        })
    })
}