const { model } = require('mongoose')
const { shelter, pet } = require('./schemas')

module.exports = {
    Shelter: model('Shelter', shelter),
    Pet: model('Pet', pet)
}