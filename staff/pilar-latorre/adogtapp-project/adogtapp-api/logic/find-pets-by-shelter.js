/* Pet.find({ shelter }).then(pets=> {
    return pets.filter(pets => pets.includes(query))
    
    })  */

    const { validateId } = require("./helpers/validations");
    const { ObjectID } = require("mongodb");
    const { NotFoundError } = require('../errors')
    const { User, Pet } = require('../models')
    
    module.exports = (shelter) => {
      validateId(shelter);
    
      const _id = ObjectID.createFromHexString(shelter);
    
      return User.findOne({ _id }).then((user) => {
        if (user) {
    
          const cursor = Pet.find({ shelterId: _id });
    debugger
          return cursor.lean()
            //.toArray()
            .then(_pets => {
              if(_pets)
                return _pets = _pets.map(({ _id, name, breed, color, description}) => ({ id: _id.toHexString(), name, breed, color, description}))
              else throw new NotFoundError('there are no pets to retrieve')
            });
    
        } else throw new NotFoundError(`the user with id ${shelter} was not found`);
      });
    } 