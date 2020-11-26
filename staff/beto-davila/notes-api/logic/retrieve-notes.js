const { validateId } = require("./helpers/validations");
// const fs = require('fs')
// const path = require('path')
const context = require("./context");
const { ObjectID } = require("mongodb");
const { NotFoundError } = require('../errors')
const {
  env: { DB_NAME },
} = process;

module.exports = function (ownerId) {
  validateId(ownerId);

  const { connection } = this;

  const db = connection.db(DB_NAME);

  const notes = db.collection("notes");

  const users = db.collection("users");

  const _id = ObjectID.createFromHexString(ownerId);

  return users.findOne({ _id }).then((user) => {
    if (user) {

      const cursor = notes.find({ owner: _id });

      return cursor
        .toArray()
        .then(_notes => {
          return _notes = _notes.map(({ _id, text, tags, visibility, date}) => ({ id: _id.toHexString(), text, tags, visibility, date}))
        });

    } else throw new NotFoundError(`the user with id ${ownerId} was not found`);
  });
}.bind(context);

// USING cursor.each() to get to know how the 'toArray' method works under the hood with the cursor.

/*

            const notes = []

            cursor.each((error, note) => {
                if (error) return callback(error)

                if (note) {
                    const { _id, text, tags, visibility, date } = note

                    note = { id: _id.toString(), text, tags, visibility, date }

                    notes.push(note)
                } else callback(null, notes)
            })
            */
