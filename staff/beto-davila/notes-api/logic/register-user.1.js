// const fs = require('fs')
// const path = require('path')
// const { createId } = require('../utils/ids')
const { validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore.1')
const context = require('./context')

const { env: { DB_NAME } } = process

// regular function to bind the context
module.exports = function (fullname, email, password) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    const { connection } = this
    
    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    //const usersPath = path.join(__dirname, '../data/users')
    return new Promise((resolve, reject) => {
        semaphore(done => {
            users
                .findOne({email})
                .then(user => {
                    if (user) {
                        done()
    
                        return reject(new Error(`the email ${email} was registered already`))
                    }
    
                    user = { fullname, email, password }
    
                    return users.insertOne(user)
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
}.bind(context)