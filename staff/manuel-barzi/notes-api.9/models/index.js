const { model } = require('mongoose')
const { user, note } = require('./schemas')

module.exports = {
    User: model('User', user),
    Note: model('Note', note)
}