require('dotenv').config()

const { expect } = require('chai')

const {
  randomStringWithPrefix,
  randomWithPrefixAndSuffix,
  randomNonString,
  randomEmptyOrBlankString,
  randomTime
} = require('geogin-utils/randoms')

const retrieveGame = require('../retrieve-game')

const {
  mongoose,
  models: { User, Game, Quest }
} = require('geogin-data')

const bcrypt = require('bcryptjs')

const {
  env: { MONGODB_URL }
} = process

/**
 * Retrieves game with all fields
 *
 * @param   {ObjectId} - game Id
 * @returns {Promise} - game data
 *
 **/

describe('retrieveGame()', () => {
  before(() =>
    mongoose.connect(MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
  )

  describe('when game exists', () => {
    let gameId

    beforeEach(async () => {
      // Add Player
      fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix(
        'surname'
      )}`
      email = randomWithPrefixAndSuffix('email', '@mail.com')
      password = randomStringWithPrefix('password')
      image = randomStringWithPrefix('image')
      score = Math.floor(Math.random() * 100)
      favorites = []

      const player = { fullname, email, password, image, score, favorites }
      const playerBD = await User.create(player)

      // Add Quest
      title = `${randomStringWithPrefix('title')}`
      coverImg = `${randomStringWithPrefix('coverImg')}`
      description = `${randomStringWithPrefix('descripcion')}`
      homeLocation = {
        type: 'Point',
        coordinates: [Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
      }
      endLocation = {
        type: 'Point',
        coordinates: [Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
      }
      time = randomTime()
      modePrivate = Math.random() < 0.5
      kidsOk = Math.random() < 0.5
      evaluations = []
      tests = []

      const quest = {
        ownerId: playerBD._id,
        undefined,
        title,
        coverImg,
        description,
        homeLocation,
        endLocation,
        time,
        modePrivate,
        kidsOk,
        evaluations,
        tests
      }
      const questBD = await Quest.create(quest)
    
      // Add Game
      qrCode = `${randomStringWithPrefix('qrCode')}`
      players = []
      teams  = []
      questGame  = Math.round(Math.random() * 100)
      progress  = []
      organizer  = Math.round(Math.random() * 100)

      const game = { undefined, organizerId: playerBD._id, questId: questBD._id, qrCode, teams, players, progress}
      const gameBD = await Game.create(game)

      gameId = gameBD._id
    })

    it('should succeed on retrieve Game', () =>
      retrieveGame(gameId.toString())
      .then(game => {
        console.log(game.players)
          expect(game).to.exist
          expect(game.qrCode).to.equal(qrCode)
          expect(game.players).to.equal(players)
          expect(game.questGame).to.equal(questGame)
          expect(game.progress).to.equal(progress)
          expect(game.organizer).to.equal(organizer)
      })
    )

    afterEach(() => {})
  })

  after(mongoose.disconnect)
})

// const player = {fullname, email, password ,image, score, favorites }
