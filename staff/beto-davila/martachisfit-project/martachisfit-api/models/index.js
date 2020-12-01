const { model } = require('mongoose')
const { user, food, diet } = require('./schemas')

module.exports = {
    User: model('User', user),
    Food: model('Food', food),
    Diet: model('Diet', diet)
}