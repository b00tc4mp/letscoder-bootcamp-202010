const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { User, Pictogram } } = require('nedea-data')

const fs = require('fs')
const path = require('path')

module.exports = function (pictogramId, ownerId) {
    validateId(ownerId)
    validateId(pictogramId)

    return User
        .findById(ownerId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

            return Pictogram.deleteOne({ _id: pictogramId })
                .then(pictogram => {
                    if (!pictogram) throw new NotFoundError(`note with id ${pictogramId} not found`)
                    const filePath = path.join(__dirname, `../data/pictograms/${pictogramId}.jpg`)
                    return new Promise((resolve, reject) => {
                        fs.unlink(filePath, error => {
                            if (error) return reject(error)

                            resolve(null)
                        })
                    })
                })
        })
} 