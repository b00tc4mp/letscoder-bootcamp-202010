const { validateQrCode, validateTeams, validatePlayers, validateId, validateProgress, validateOrganizerId } = require('./helpers/validations')
const { NotFoundError } = require('geogin-errors')
const { User, Game, Quest } = require('../models')
const mongoose = require('mongoose')

module.exports = function (qrCode, teams, players, quest, progress, organizer) {
    validateQrCode(qrCode)
    validateTeams(teams)
    validatePlayers(players)
    validateId(quest)
    validateProgress(progress)
    validateId(organizer)

    return User.findById(organizer).lean()
    .then(user => {
      if (!user) throw new NotFoundError(`user with id ${organizer} not found`)
      
      return Quest.findById(quest).lean()
      .then(quest => {
        if (!quest) throw new NotFoundError(`quest with id ${quest} not found`)

      return Game.create({
        qrCode, 
        teams, 
        players, 
        quest, 
        progress, 
        organizer: new mongoose.mongo.ObjectId(organizer)
      }).then(game => {
        game.qrCode = qrCode.replace(/id_game/,game._id);
        return game.save()
      }
      )
    })
  })

}
