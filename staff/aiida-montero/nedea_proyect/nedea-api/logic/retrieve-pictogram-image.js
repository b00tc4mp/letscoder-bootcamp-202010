const fs = require ('fs')
const path = require('path')
const {validateId} = require('./helpers/validations')
const {promises : fsp} = fs

module.exports = pictogramId => {
    validateId(pictogramId)

    const file = path.join(__dirname, `../data/pictograms/${pictogramId}.jpg`)

    return fsp.access(file, fs.constants.F_OK)
    .then( ()=> fs.createReadStream(file))
    .catch(()=> fs.createReadStream(path.join(__dirname, '../data/pictograms/default.jpg')))

}