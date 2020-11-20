const { validateId, validateCallback } = require('./helpers/validations')
const fs = require('fs')
const path = require('path')

// TODO retrieve user followings
// TODO retrieve public notes of each following
// TODO sort all public notes by date DESC

module.exports = (userId, callback) => {
    validateId(userId)
    validateCallback(callback)

    let publicNotes = []

}