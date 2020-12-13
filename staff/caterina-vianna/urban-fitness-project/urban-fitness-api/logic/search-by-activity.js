//TODO VALIDATIONS
const { NotFoundError } = require("../errors");
const { Activity } = require("../models");

module.exports = (mySports) => {
  //validateTags(mySports);

  debugger;
  return Activity.find({ sport: mySports })
    .lean()
    .then((activities) => {
      debugger;
      if (!activities)
        new NotFoundError(`sports with these genres ${mySports} not found`);

      activities.forEach((activity) => {
        // const {_id} = activity
        // activity.id =_id.toString()

        delete activity._id;
        delete activity.password;
      });
      return activities;
    });
};
