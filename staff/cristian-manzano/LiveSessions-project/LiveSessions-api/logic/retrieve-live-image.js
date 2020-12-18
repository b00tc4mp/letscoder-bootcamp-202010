const fs = require('fs')
const path = require('path')
const { validateId } = require('./helpers/validations')
const { promises: fsp } = fs
debugger
module.exports = liveId => {
    validateId(liveId)

    const file = path.join(__dirname, `../data/lives/${liveId}.jpg`)

    return fsp.access(file, fs.constants.F_OK)
        .then(() => fs.createReadStream(file))
        .catch(() => fs.createReadStream(path.join(__dirname, '../data/lives/default-profile-image.jpg')))
} 