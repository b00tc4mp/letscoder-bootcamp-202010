require('dotenv').config()

const chai = require('chai')
const { expect } = chai
const chaiSubset = require('chai-subset');
const { ContentError, LengthError } = require('geogin-errors')

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

  describe('when game id is wrong', () => {
    describe('when game id is not a string', () => {
        let gameId

        beforeEach(() => gameId = [true, 123, null, undefined, {}, function () { }, []].random())

        it('should fail on non-string game id', () => {
            expect(() => retrieveGame(gameId, () => { })).to.throw(TypeError, `${gameId} is not an id`)
        })
    })

    describe('when game id is empty or blank', () => {
        let gameId

        beforeEach(() => gameId = ['', ' ', '\t', '\t', '\r'].random())

        it('should fail on empty or blank game id', () => {
            expect(() => retrieveGame(gameId, () => { })).to.throw(ContentError, `id is empty or blank`)
        })
    })

    describe('when game id length is not 24', () => {
        let gameId

        beforeEach(() => gameId = ['a', 'b', 'c'].random().repeat(24 + (Math.random() > 0.5 ? 3 : 3)))

        it('should fail on game id length different from 24', () => {
            expect(() => retrieveGame(gameId, () => { })).to.throw(LengthError, `${gameId} length ${gameId.length} is not 24`)
        })
    })

    describe('when game id is not hexadecimal', () => {
      let gameId

      beforeEach(() => gameId = '00000000000000000000000J')

      it('should fail on game id length different from 24', () => {
          expect(() => retrieveGame(gameId, () => { })).to.throw(TypeError, `is not a valid id`)
      })
  })
})

  after(mongoose.disconnect)
})

