const { validateId } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')
const { promises: fsp } = fs

module.exports = (productId) => {
    validateId(productId)


    const file = path.join(__dirname, `../data/products/${productId}.jpg`)

    return fsp.access(file, fs.constants.F_OK)
        .then(() => fs.createReadStream(file))
        .catch(() => fs.createReadStream(path.join(__dirname, `../data/products/default.jpg`)))

}