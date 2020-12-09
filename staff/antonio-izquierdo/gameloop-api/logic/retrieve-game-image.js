const fs = require('fs')
const path = require('path')
const { validateId } = require('./helpers/validations')
const { promises: fsp } = fs

module.exports = gameId => {
    validateId(gameId)

    const file = path.join(__dirname, `../data/games/${gameId}.jpg`)

    return fsp.access(file, fs.constants.F_OK)
        .then(() => fs.createReadStream(file))
        .catch(() => fs.createReadStream(path.join(__dirname, '../data/games/default.jpg')))
} 