const { validateId} = require('./helpers/validations')
const { models: { Pictogram }, mongoose : {Types : {ObjectId} } } = require('nedea-data')

module.exports = function (ownerId) {
    validateId(ownerId)
    //db.pictogram.createIndex({"title":'text',"description":'text'})
    const cursor = Pictogram.find({ owner : ObjectId(ownerId) })

    return cursor.lean()
        .then(pictogram => {
            pictogram.forEach(pictogram => {
                const { _id } = pictogram

                pictogram.id = _id.toString()

                delete pictogram._id
               
              
            })
            return pictogram

        })
} 