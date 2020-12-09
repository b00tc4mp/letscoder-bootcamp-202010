const { validateId, validateCallback } = require('./helpers/validations')
const path = require('path')
const fs = require('fs')

module.exports = (pictogramId, stream) => {
    validateId(pictogramId)
    // TODO validate file

    return new Promise((resolve, reject) => {
        try{
            const toStream = fs.createWriteStream(path.join(__dirname, `../data/pictograms/${pictogramId}.jpg`))
        
            stream.pipe(toStream)
            resolve()

        }catch(error){
            reject(error)
        }
        
    })
       

    // file.on('end', callback(null))

    // file.on('error', callback)
}