const { model } = require('mongoose')
const { user, food, diet, article, recipeImg, recipe } = require('./schemas')

module.exports = {
    User: model('User', user),
    Food: model('Food', food),
    Diet: model('Diet', diet),
    Article: model('Article', article),
    RecipeImg: model('RecipeImg', recipeImg),
    Recipe: model('recipe', recipe)
}