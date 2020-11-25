const { validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const context = require('./context')

const { env: { DB_NAME } } = process

module.exports = function (fullname, email, password) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    return semaphore( () => 
        users
        .findOne({ email })
        .then(user => {
            if (user) throw new Error(`user with e-mail ${email} already registered`)
            
            user = { fullname, email, password }

            return users.insertOne(user)
               
 

        
            })
             .then(() => {}) // Aqui viene la response vacia , por que el register no devuelve nada.
    )
}.bind(context)