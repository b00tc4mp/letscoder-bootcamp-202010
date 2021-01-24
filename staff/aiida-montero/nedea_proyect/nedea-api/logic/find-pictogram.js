const { validateQuery } = require('./helpers/validations')
const { models: { Pictogram } } = require('nedea-data')


module.exports = function (query) {
    validateQuery(query)
    //db.pictogram.createIndex({"title":'text',"description":'text'})
    const cursor = Pictogram.find({ $text: { $search: query, $caseSensitive: false, $diacriticSensitive: false } })

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