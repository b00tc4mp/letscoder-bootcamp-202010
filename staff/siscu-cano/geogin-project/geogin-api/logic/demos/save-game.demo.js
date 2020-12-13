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
      'http://localhost:4000/api/game/id_game',
      undefined,
      undefined,
      '5fd5ff757e18090924f1e54b',
      undefined,
      '5fd55e3930882ef33c018a24'
    )
  )
  // .then(() => createGame('5fd6321350d64660d5a4faef',undefined, [{name: "Los Chipirones",players: []}],undefined,undefined,undefined,undefined ))
  .then(console.log)
  .catch(console.error)
  .then(mongoose.disconnect)

//Parameters: gameId, qrCode, teams, players, questId, progress, organizerId
