const { validateId } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')


module.exports = (gameId, stream) => {
    if (typeof gameId !== 'undefined')validateId(gameId)
    //validateStream(stream)
    // validateCallback(callback)

    return new Promise((resolve, reject) => {

        try {
            const toStream = fs.createWriteStream(path.join(__dirname, `../data/games/${gameId}.jpg`))
        
            stream.pipe(toStream)

            stream.once('end', resolve)
        } catch (error) {
            reject(error)
        }
    })
}