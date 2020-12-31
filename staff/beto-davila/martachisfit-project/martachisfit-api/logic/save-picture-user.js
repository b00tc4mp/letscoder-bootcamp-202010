const { validateId } = require('./helpers/validations')
const fs = require('fs')
const path = require('path')

/**
 *  Upload user's picture
 * 
 * @param {string} userId user's fullname
 * @param {Stream} file data image
 * @param {string} filename name image
 * 
 * @returns {Promise} empty promise on successful upload 
 */

module.exports = function (userId, stream) {
    validateId(userId)
    // validateStream

    return new Promise((resolve, reject) => {
        try {
            const toStream = fs.createWriteStream(path.join(__dirname, `../data/uploads/${userId}.jpg`))

            stream.pipe(toStream)

            stream.once('end', resolve)
        } catch (error) {
            reject(error)
        }
    })
}
