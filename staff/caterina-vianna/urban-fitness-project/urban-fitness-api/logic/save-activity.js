const {
  validateId,
  validateText,
  validateTags,
  validateVisibility,
} = require("./helpers/validations");
const { ObjectId } = require("mongodb");
/* const { NotFoundError } = require("notes-errors"); */
const { User, Activity } = require("../models");

module.exports = (
  ownerId,
  activityId,
  title,
  description,
  checked,
  address,
  sport,
  repeat,
  spots,
  activityDate
) => {
  validateId(ownerId);
  if (typeof activityId !== "undefined") validateId(activityId);
  //TODO validations

  return User.findById(ownerId).then((user) => {
    /* if (!user) throw new NotFoundError(`user with id ${ownerId} not found`); */

    if (activityId) {
      return Activity.findById(activityId)
        .then((activity) => {
          if (!activity)
            throw new NotFoundError(`activity with id ${activityId} not found`);

          activityId.title = title;
          activityId.description = description;
          activityId.checked = checked;
          activityId.address = address;
          activityId.sport = sport;
          activityId.repeat = repeat;
          activityId.spots = spots;
          activityId.activityDate = activityDate;
          //TODO ADD INPUT PRICE
          activityId.price = price;
          return activity.save();
        })
        .then((activity) => activity.id);
    } else
      return Activity.create({
        title,
        description,
        checked,
        address,
        sport,
        repeat,
        spots,
        activityDate,
        price,
        owner: ObjectId(ownerId),
        date: new Date(),
      }).then((activity) => activity.id);
  });
};
