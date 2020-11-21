// const fs = require('fs')
// const path = require('path')
// const { createId } = require('../utils/ids')
const { validateCallback, validateId, validateText, validateTags, validateVisibility } = require('./helpers/validations')
const context = require('./context')
const { env: { DB_NAME } } = process

module.exports = function (owner, id, text, tags, visibility, callback) {
    validateId(owner)
    if (typeof id !== 'undefined') validateId(id)
    validateText(text)
    validateTags(tags)
    validateVisibility(visibility)
    validateCallback(callback)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const notes = db.collection('notes')


    notes.insertOne({owner, text, tags, visibility}, (error, result) => {
        if (error) return callback(error)
    
        console.log(result.ops[0])
        callback(null)
    })

}.bind(context)