const { validateId } = require("./helpers/validations");
const { NotFoundError } = require("../routes/api/helpers/with-error-handling");
const { User, Live } = require("../models");

module.exports = (userId) => {
  validateId(userId);

  return User.findById(userId)
    .lean()
    .then((user) => {
      if (!user) new NotFoundError(`user with id ${promoterId} not found`);
debugger
         if (user.role === 'ARTIST') {
            const artistId = userId
            return Live.find({ artistId: artistId }, null, {
                sort: { date: -1 },
              }).lean();
            
        }
        else {
            const promoterId = userId
            return Live.find({ promoterId: promoterId }, null, {
              sort: { date: -1 },
            }).lean();
        }
    })
    .then((lives) => {
      lives.forEach((live) => {
        const { _id } = live;

        live.id = _id.toString();

        delete live._id;
        delete live.owner;
      });

      return lives;
    });
};