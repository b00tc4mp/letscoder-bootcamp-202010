require('dotenv').config()

const { mongoose } = require('geogin-data')
const {
  models: { User }
} = require('geogin-data')
const createGame = require('../save-game')
const { random } = Math

MONGODB_URL = 'mongodb://localhost:27017/geogin-app'

const team = {
  name: "Los Chipirones",
  players: [
    {
        fullname: "Julian Perez",
        email: "julian@perez.com",
        password: "123456789",
        image: "http://laquesea",
        score: 100,
        favorites: []
    }
  ]
}

mongoose
  .connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  // Create new game
  .then(() =>
    createGame(
      undefined,
      '5fd6a2ff76d7ba5e82285a53',
      '5fd77f445437da7de3eb08e6',
      'http://localhost:4000/api/game/id_game',
      undefined,
      undefined,
      undefined
    )
  )
  // .then(() => createGame('5fd6321350d64660d5a4faef',undefined, [{name: "Los Chipirones",players: []}],undefined,undefined,undefined,undefined ))
  .then(console.log)
  .catch(console.error)
  .then(mongoose.disconnect)

//Parameters: gameId, organizerId, questId, qrCode, teams, players, progress


