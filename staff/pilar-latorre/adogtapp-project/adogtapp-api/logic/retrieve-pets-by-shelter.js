/* Pet.find({ shelter }).then(pets=> {
    return pets.filter(pets => pets.includes(query))
    
    })  */

    const { validateQuery } = require('./helpers/validations')
    const { Pet } = require('../models')
    
    
    module.exports = function (query) {
        validateQuery(query)
    
        // TODO search users by query matching any part of the fullname or the e-mail
    
        // IMPORTANT!!!!!! create an index in db for this search, run "db.pets.createIndex({"name":'text',"breed":'text'})" in the mongo shell for this database and collection
        const cursor = Pet.find({ $text: { $search: query, $caseSensitive: false, $diacriticSensitive: false } })
    
        return cursor.lean()
            .then(pets => {
                //pets = pets.map(({ _id, fullname, email }) => ({ id: _id.toString(), fullname, email }))
                pets.forEach(pet => {
                    const { _id } = pet
    
                    pet.id = _id.toString()
    
                    delete pet._id
                    delete pet.shelter
                    delete pet.id
                  
                })
    
                return pets
            })
    } 