const { validateEmail, validatePassword, validateCallback, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const context = require('./context')

const { env: { DB_NAME } } = process

module.exports = function (fullname, email, password, callback) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const { connection } = this

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

                return callback(new Error(`user with e-mail ${email} already registered`))
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
}.bind(context)