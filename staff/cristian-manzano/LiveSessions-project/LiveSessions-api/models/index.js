const { model } = require('mongoose')
const { user } = require('./schemas')
const lives = require('./schemas/lives')

module.exports = {
    User: model('User', user),
    Lives: model('Lives', lives)
}