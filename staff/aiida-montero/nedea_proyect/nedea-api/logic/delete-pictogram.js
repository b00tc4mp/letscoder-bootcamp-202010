const {validateId} = require('./helpers/validations')
const{ObjectId} = require('mongodb')
const{NotFoundError} = require('../errors')
const {User} = require('../models')
const {Pictogram} = require('../models')
const fs  = require ('fs')
const path = require ('path')

module.exports = function (pictogramId, ownerId) {
    validateId(ownerId)
    validateId(pictogramId)

    return User
        .findById(ownerId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

         
        return Pictogram.deleteOne({_id :pictogramId})
           
        .then (pictogram => {
            if (!pictogram) throw new NotFoundError(`note with id ${pictogramId} not found`)
            console.log(pictogram)
            const filePath = path.join(__dirname, `../data/pictograms/${pictogramId}.jpg`)
            return new Promise ((resolve, reject) => {
                fs.unlink(filePath, error => {
        
                    resolve(null)
                })
            })
            
        })
    })
} 