const { model } = require('mongoose')
const { user, pet } = require('./schemas')

module.exports = {
    User: model('User', user),
    Pet: model('Pet', pet)
}