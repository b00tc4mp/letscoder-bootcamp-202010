const { model } = require('mongoose')
const { user, food } = require('./schemas')

module.exports = {
    User: model('User', user),
    Food: model('Food', food)
}