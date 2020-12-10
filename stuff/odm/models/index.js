const { model } = require('mongoose')
const { user, car } = require('./schemas')

module.exports = {
    User: model('User', user),
    Car: model('Car', car)
}