const { validateEmail, validatePassword, validateCallback, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const context = require('./context')

const { env: { DB_NAME } } = process

module.exports = (fullname, email, password) => {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    return new Promise((resolve, reject) => {

        semaphore(done => {
            users
                .findOne({ email })
                .then(user => {
                    if (user) {
                        done()
                        return reject(new Error(`e-mail ${email} already registered`))
                    }

                    return users.insertOne({ fullname, email, password })
                })
                .then(result => {
                    done()
                    resolve()
                })
                .catch(error => {
                    done()
                    reject(error)
                })
        })
    })
}