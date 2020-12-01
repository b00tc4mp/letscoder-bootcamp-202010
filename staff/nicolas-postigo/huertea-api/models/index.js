const { model } = require('mongoose')
const { user, offer } = require('./schemas')

module.exports = {
    User: model('User', user),
    Offer: model('Offer', offer)
}