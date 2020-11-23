// const fs = require('fs')
// const path = require('path')
// const { createId } = require('../utils/ids')
const { validateCallback, validateId, validateText, validateTags, validateVisibility } = require('./helpers/validations')
const context = require('./context')
const { env: { DB_NAME } } = process
const { ObjectID } = require('mongodb')

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

    const users = db.collection('users')

    const _id = ObjectID(owner)
    
    users.findOne({ _id }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new Error(`the user with id ${owner} does not exist`)) 

        if (id) {
            const _id = ObjectID(id)

            notes.findOne({ _id }, (error, note) => {
                if (error) return callback(error)
        
                if (!note) return callback(new Error(`the note with id ${id} does not exist`))

                notes.updateOne({ _id }, { $set: {text, tags, visibility} }, (error, result) => {
                    if (error) return callback(error)

                    callback(null)
                })
            })  
        }
        else notes.insertOne({owner: ObjectID(owner), text, tags, visibility, date: new Date}, (error, result) => {
                if (error) return callback(error)
                
                console.log(result.ops[0])
                callback(null)
                })
    })

}.bind(context)