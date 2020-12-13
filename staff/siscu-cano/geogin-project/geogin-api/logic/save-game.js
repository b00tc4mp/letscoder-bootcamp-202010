const { mongoose: { Types: { ObjectId } }, models: { User, Game,  Quest } } = require('geogin-data')
const { validateQrCode, validateTeams, validatePlayers, validateId, validateProgress } = require('./helpers/validations')
const { NotFoundError } = require('geogin-errors')

/**
 * Create game
 *
 * @param {string} qrCode
 * @param {Array} teams
 * @param {Array} players
 * @param {string} quest
 * @param {Array} progress
 * @param {string} organizer
 */

module.exports = function (gameId, qrCode, teams, players, questId, progress, organizerId) {
    if (typeof gameId !== 'undefined') { validateId(gameId) }
    if (typeof qrCode !== 'undefined') { validateQrCode(qrCode) }
    if (typeof teams !== 'undefined') { validateTeams(teams)}
    if (typeof players !== 'undefined') { validatePlayers(players)}
    if (typeof questId !== 'undefined') { validateId(questId)}
    if (typeof progress !== 'undefined') { validateProgress(progress)}
    if (typeof organizerId !== 'undefined') { validateId(organizerId)}

    return (async () => {
  
      if (gameId) 
      {
        const game = await Game.findById(gameId)
        if (!game) throw new NotFoundError(`game with id ${gameId} not found`)

        if (typeof qrCode !== 'undefined') { game.title = title }
        if (typeof teams !== 'undefined') { game.teams = teams }
        if (typeof players !== 'undefined') { game.players = players }
        if (typeof progress !== 'undefined') { game.progress = progress }
        
        await game.save()
        console.log('questId save quest:', questId )
        return game._id;
      }
      else 
      {
        const user = await User.findById(organizerId).lean()
        if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)
  
        const quest = await Quest.findById(questId).lean()
        if (!quest) throw new NotFoundError(`quest with id ${quest} not found`)
        
        const game = await Game.create({ qrCode, teams, players, quest: ObjectId(questId), progress, organizer: ObjectId(organizerId) })
        game.qrCode = qrCode.replace(/id_game/,game._id);
        await game.save()
        
        return game._id;
      }

    })()
  }