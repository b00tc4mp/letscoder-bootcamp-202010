const { validateId, validateCallback } = require('./helpers/validations')
// const fs = require('fs')
// const path = require('path')
const context = require('./context')
const { ObjectID } = require('mongodb')
const { env: { DB_NAME} } = process


module.exports = function (token, callback) {
    validateId(token)
    validateCallback(callback)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const notes = db.collection('notes')

    var owner = ObjectID.createFromHexString(token)
    // const query = `owner: "${token}"`

    
    notes.find({ owner }).toArray(function (error, _notes) {
        if (error) return callback(error)

        return callback(null, _notes)
    })
    
}.bind(context)