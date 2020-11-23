const {
  validateId,
  validateText,
  validateTags,
  validateVisibility,
  validateCallback,
} = require("./helpers/validations");

const context = require("./context");

const {
  env: { DB_NAME },
} = process;

module.exports = (id, text, tags, owner, visibility, callback) => {
  if (typeof id !== "undefined") validateId(id);
  validateText(text);
  validateTags(tags);
  //validateId(owner);
  validateVisibility(visibility);
  validateCallback(callback);

  const { connection } = context;

  const db = connection.db(DB_NAME);
  debugger;
  const notes = db.collection("notes");

  if (id)
    notes.findOne({ id }, (error, note) => {
      if (error) {
        return callback(error);
      }
      if (note) {
        note = { id, text, tags, owner, visibility };
        notes.insertOne(note, (error, result) => {
          if (error) {
            return callback(error);
          }
          return callback(null, result);
        });
      }
    });
  else {
    const note = { id, text, tags, owner, visibility };
    notes.insertOne(note, (error, result) => {
      if (error) {
        return callback(error);
      }
      return callback(null, result);
    });
  }
};
