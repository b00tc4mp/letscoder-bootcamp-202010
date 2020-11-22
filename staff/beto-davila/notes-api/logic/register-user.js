// const fs = require('fs')
// const path = require('path')
// const { createId } = require('../utils/ids')
const { validateEmail, validatePassword, validateCallback, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const context = require('./context')

const { env: { DB_NAME } } = process

// regular function to bind the context
module.exports = function (fullname, email, password, callback) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const { connection } = this
    
    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    //const usersPath = path.join(__dirname, '../data/users')

    semaphore(done => {
        users.findOne({email: email}, (error, user) => {
            if (error) {
                done()

                return callback(error)
            }
            if (user) {
                done()

                return callback(new Error(`the email ${email} was registered already`))
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