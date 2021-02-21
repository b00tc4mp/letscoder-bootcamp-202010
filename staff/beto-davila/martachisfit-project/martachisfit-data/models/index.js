const { model } = require('mongoose')
const { user, food, diet, article, workout, recipe, movement } = require('./schemas')

module.exports = {
    User: model('User', user),
    Food: model('Food', food),
    Diet: model('Diet', diet),
    Article: model('Article', article),
    Recipe: model('Recipe', recipe),
    Workout: model('Workout', workout),
    Movement: model('Movement', movement)
}