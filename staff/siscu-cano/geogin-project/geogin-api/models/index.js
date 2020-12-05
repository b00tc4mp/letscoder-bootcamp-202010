const { model } = require('mongoose')
const { user, game, quest, point, evaluation } = require('./schemas')

module.exports = {
    User: model('User', user),
    Game: model('Game', game),
    Quest: model('Quest', quest),
    Point: model('Point', point),
    Evaluation: model('Evaluation', evaluation)
}