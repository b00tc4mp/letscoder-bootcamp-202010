// const { validateEmail, validateCity, validateDescription, validateTags, validateArtistName, validateFullname } = require('./helpers/validations')
const semaphore = require("./helpers/semaphore");
const { ConflictError } = require("../errors");
const { Activity } = require("../models");
debugger;

module.exports = function (
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
) {
  debugger;
  return semaphore(() =>
    Activity.findOne({ _id: activityId })
      .lean()
      .then((activity) => {
        if (!activity)
          throw new ConflictError(`live with id ${activityId} does not exists`);
        Activity.updateOne(
          { _id: activityId },
          {
            $set: {
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
            },
          }
        ).then((result) => "");
      })
  );
};
