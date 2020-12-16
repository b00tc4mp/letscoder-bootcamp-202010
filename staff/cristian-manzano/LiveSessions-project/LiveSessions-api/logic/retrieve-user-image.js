const fs = require('fs')
const path = require('path')
const { validateId } = require('./helpers/validations')
const { promises: fsp } = fs
debugger
module.exports = userId => {
    validateId(userId)

    const file = path.join(__dirname, `../data/users/${userId}.jpg`)
debugger
    return fsp.access(file, fs.constants.F_OK)
        .then(() => fs.createReadStream(file))
        .catch(() => fs.createReadStream(path.join(__dirname, '../data/users/default-profile-image.jpg')))
} 