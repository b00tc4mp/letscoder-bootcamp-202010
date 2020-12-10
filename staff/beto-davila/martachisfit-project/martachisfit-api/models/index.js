const { model } = require('mongoose')
const { user, food, diet, article, workout, recipe } = require('./schemas')

module.exports = {
    User: model('User', user),
    Food: model('Food', food),
    Diet: model('Diet', diet),
    Article: model('Article', article),
    Recipe: model('recipe', recipe),
    Workout: model('workout', workout)
}