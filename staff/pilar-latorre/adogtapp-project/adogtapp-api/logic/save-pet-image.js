const { validateId } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')

module.exports = (petId, stream) => {
    debugger
    validateId(petId)
    //validateStream(stream)
debugger
    return new Promise((resolve, reject) => {
        try {
            const toStream = fs.createWriteStream(path.join(__dirname, `../data/pets/${petId}.jpg`))

            stream.pipe(toStream)

            // TODO check why these fail
            // fromStream.on('end', resolve)
            // toStream.on('end', resolve)

            resolve()
        } catch (error) {
            reject(error)
        }
    })
}