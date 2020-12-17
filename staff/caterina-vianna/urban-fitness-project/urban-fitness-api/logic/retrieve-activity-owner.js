const { validateId } = require("./helpers/validations");
const { NotFoundError } = require("../routes/api/helpers/with-error-handling");
const { User, Activity } = require("../models");

module.exports = (ownerId) => {
  validateId(ownerId);

  return User.findById(ownerId)
    .lean()
    .then((user) => {
      if (!user) new NotFoundError(`user with id ${ownerId} not found`);

      return Activity.find({ owner: ownerId }, null, {
        sort: { date: -1 },
      }).lean();
    })
    .then((activities) => {
      activities.forEach((activity) => {
        const { _id } = activity;

        activity.id = _id.toString();

        delete activity._id;
        delete activity.owner;
      });

      return activities;
    });
};
