const { model } = require('mongoose')
const { user, game, quest, point, evaluation } = require('./schemas')

const User = model('User', user)
const Game = model('Game', game)
const Quest = model('Quest', quest)
const Point = model('Point', point)
const Evaluation = model('Evaluation', evaluation)

User.createIndexes()
Game.createIndexes()
Quest.createIndexes()
Point.createIndexes()
Evaluation.createIndexes()

module.exports = {
    User,
    Game,
    Quest,
    Point,
    Evaluation
}