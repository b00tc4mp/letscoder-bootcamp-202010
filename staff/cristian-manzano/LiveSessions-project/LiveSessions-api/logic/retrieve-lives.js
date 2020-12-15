const { validateId } = require("./helpers/validations");
const { NotFoundError } = require("../routes/api/helpers/with-error-handling");
const { User, Live } = require("../models");

module.exports = (ownerId) => {
  validateId(ownerId);

  return User.findById(ownerId)
    .lean()
    .then((user) => {
      if (!user) new NotFoundError(`user with id ${ownerId} not found`);

      return Live.find({ owner: ownerId }, null, {
        sort: { date: -1 },
      }).lean();
    })
    .then((lives) => {
      lives.forEach((live) => {
        const { _id } = live;

        live.id = _id.toString();

        delete live._id;
        delete live.owner;
      });

      return activities;
    });
};