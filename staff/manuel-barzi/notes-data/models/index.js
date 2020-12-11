const { model } = require('mongoose')
const { user, note } = require('./schemas')

const User = model('User', user)

User.createIndexes()

module.exports = {
    User,
    Note: model('Note', note)
}