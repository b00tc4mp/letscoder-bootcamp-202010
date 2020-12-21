require('dotenv').config()

const chai = require('chai')
const { expect } = chai
const chaiSubset = require('chai-subset');

const {
  randomStringWithPrefix,
  randomWithPrefixAndSuffix,
  randomTime
} = require('geogin-utils/randoms')

const retrieveGame = require('../retrieve-game')

const {
  mongoose,
  mongoose: { Types: { ObjectId } },
  models: { User, Game, Quest }
} = require('geogin-data')

const bcrypt = require('bcryptjs')

const {
  env: { MONGODB_URL }
} = process

chai.use(chaiSubset);

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
    let idPlayer, idQuest, idGame, quest

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
      idPlayer = playerBD._id

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

      quest = {
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
      idQuest = questBD._id

      // Add Game
      qrCode = `${randomStringWithPrefix('qrCode')}`
      players = []
      teams = []
      questGame = Math.round(Math.random() * 100)
      progress = []
      organizer = Math.round(Math.random() * 100)

      const game = { undefined, organizerId: playerBD._id, quest: questBD._id, qrCode, teams, players, progress }
      const gameBD = await Game.create(game)

      idGame = gameBD._id
    })

    it('should succeed on retrieve Game', () =>
      retrieveGame(idGame.toString())
        .then(game => {
          expect(game).to.exist
          expect(game._id.toString()).to.equal(idGame.toString())
          expect(game.qrCode).to.equal(qrCode)
          expect(game.quest.title).to.equal(quest.title)
          expect(game.quest.coverImg).to.equal(quest.coverImg)
          expect(game.quest.description).to.equal(quest.description)
          expect(game.quest.time).to.equal(quest.time)
          expect(game.quest.modePrivate).to.equal(quest.modePrivate)
          expect(game.quest.homeLocation).to.containSubset(quest.homeLocation)
          expect(game.quest.endLocation).to.containSubset(quest.endLocation)
          expect(game.quest.tests).to.containSubset(quest.tests)
        })
    )

    afterEach(() => {
      User
      .deleteOne({ _id: idPlayer })
      .then(deleteObj => expect(deleteObj.deletedCount).to.equal(1))
      Quest
      .deleteOne({ _id: idQuest })
      .then(deleteObj => expect(deleteObj.deletedCount).to.equal(1))
      Game
      .deleteOne({ _id: idGame })
      .then(deleteObj => expect(deleteObj.deletedCount).to.equal(1))
    
    }) // End afterEach


  }) // End describe

  after(mongoose.disconnect)
})

