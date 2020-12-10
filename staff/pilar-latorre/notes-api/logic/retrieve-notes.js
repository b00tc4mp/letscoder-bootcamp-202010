const { validateId } = require("./helpers/validations");
const { ObjectID } = require("mongodb");
const { NotFoundError } = require('../errors')
const { User, Note } = require('../models')

module.exports = (ownerId) => {
  validateId(ownerId);

  const _id = ObjectID.createFromHexString(ownerId);

  return User.findOne({ _id }).then((user) => {
    if (user) {

      const cursor = Note.find({ owner: _id }).sort({ date: -1});

      return cursor.lean()
        //.toArray()
        .then(_notes => {
          if(_notes)
            return _notes = _notes.map(({ _id, text, tags, visibility, date}) => ({ id: _id.toHexString(), text, tags, visibility, date}))
          else throw new NotFoundError('there are no notes to retrieve')
        });

    } else throw new NotFoundError(`the user with id ${ownerId} was not found`);
  });
}