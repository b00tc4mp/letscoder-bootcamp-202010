const { validateId } = require('./helpers/validations')

const { models: { Pictogram }, mongoose: { Types: { ObjectId } } } = require('nedea-data')



module.exports = function (pictogramId, title, description) {
    const _id = ObjectId(pictogramId)
   
    console.log(pictogramId, title, description)
    return Pictogram
        .updateOne({ _id }, { $set: { title, description } })
        .then(result => result.id)
}