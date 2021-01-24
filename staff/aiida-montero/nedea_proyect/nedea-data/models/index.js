const { model } = require('mongoose')
const { user, pictogram } = require('./schemas')

module.exports = {
    User: model('User', user),
    Pictogram: model('Pictogram', pictogram )
}