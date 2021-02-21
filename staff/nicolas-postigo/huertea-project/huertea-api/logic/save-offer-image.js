const { validateId } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')

/**
 *  Upload offerId's picture
 * 
 * @param {string} offerId offer's identification number(ObjectId)
 * @param {Stream} stream data image
 * @returns {Promise} empty promise on successful upload 
 * 
 */

module.exports = (offerId, stream) => {
    
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