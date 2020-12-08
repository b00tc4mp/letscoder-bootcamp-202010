const fs = require('fs')
const path = require('path')
const { validateId } = require('./helpers/validations')
const { promises: fsp } = fs

module.exports = offerId => {
    validateId(offerId)

    const file = path.join(__dirname, `../data/offers/${offerId}.jpg`)

    return fsp.access(file, fs.constants.F_OK)
        .then(() => fs.createReadStream(file))
        .catch(() => fs.createReadStream(path.join(__dirname, '../data/offers/default.jpg')))
}