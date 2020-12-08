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
  price,
  checked,
  address,
  sport,
  repeat,
  spots,
  activityDate
) => {
  debugger;
  validateId(ownerId);
  if (typeof activityId !== "undefined") validateId(activityId);
  //TODO validations

  return User.findById(ownerId).then((user) => {
    /* if (!user) throw new NotFoundError(`user with id ${ownerId} not found`); */

    if (activityId) {
      debugger;
      return Activity.findById(activityId)
        .then((activity) => {
          /*  if (!activity)
            throw new NotFoundError(`activity with id ${activityId} not found`);
 */
          activityId.title = title;
          activityId.description = description;
          activityId.price = price;
          activityId.checked = checked;
          activityId.address = address;
          activityId.sport = sport;
          activityId.repeat = repeat;
          activityId.spots = spots;
          activityId.activityDate = activityDate;
          debugger;
          return activity.save();
        })
        .then((activity) => activity.id);
    } else
      return Activity.create({
        title,
        description,
        price,
        checked,
        address,
        sport,
        repeat,
        spots,
        activityDate,
        owner: ObjectId(ownerId),
        date: new Date(),
      }).then((activity) => activity.id);
  });
};
