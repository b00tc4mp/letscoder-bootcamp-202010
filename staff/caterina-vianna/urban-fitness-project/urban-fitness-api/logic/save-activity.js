const {
  validateId,
  validateText,
  validateTags,
  validateVisibility,
} = require("./helpers/validations");
//TODO VALIDATIONS
const { ObjectId } = require("mongodb");
const { NotFoundError } = require("../routes/api/helpers/with-error-handling");
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
  selectedItems,
  duration
) => {
  debugger;
  validateId(ownerId);
  if (typeof activityId !== "undefined") validateId(activityId);
  //TODO validations

  return User.findById(ownerId).then((user) => {
    if (!user) throw new NotFoundError(`user with id ${ownerId} not found`);
    debugger;
    if (activityId) {
      debugger;
      return Activity.findById(activityId)
        .then((activity) => {
          if (!activity)
            throw new NotFoundError(`activity with id ${activityId} not found`);

          activityId.title = title;
          activityId.description = description;
          activityId.price = price;
          activityId.checked = checked;
          activityId.address = address;
          activityId.sport = sport;
          activityId.repeat = repeat;
          activityId.spots = spots;
          activityId.selectedItems = selectedItems;
          activityId.duration = duration;
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
        selectedItems,
        duration,
        owner: ObjectId(ownerId),
        date: new Date(),
      }).then((activity) => activity.id);
  });
};
