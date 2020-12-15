const { validateId } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')

module.exports = (offerId, stream) => {
    debugger
    validateId(offerId)


    return new Promise((resolve, reject) => {
        try {
            const toStream = fs.createWriteStream(path.join(__dirname, `../data/offers/${offerId}.jpg`))

            stream.pipe(toStream)


            resolve()
        } catch (error) {
            reject(error)
        }
    })
}