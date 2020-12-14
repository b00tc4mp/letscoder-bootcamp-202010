const { model } = require('mongoose')
const { user, game } = require('./schemas')

module.exports = {
    User: model('User', user),
    Game: model('Game', game)
}