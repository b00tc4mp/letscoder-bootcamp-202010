const { model } = require('mongoose')
const { user } = require('./schemas')
const live = require('./schemas/live')

module.exports = {
    User: model('User', user),
    Live: model('Live', live)
}