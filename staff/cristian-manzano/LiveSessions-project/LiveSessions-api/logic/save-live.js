
const {
    validateId,
  } = require("./helpers/validations");
  //TODO VALIDATIONS

  const { ObjectId } = require("mongodb");
  const { NotFoundError } = require("../routes/api/helpers/with-error-handling");
  const { User, Live } = require("../models");
  
  module.exports = (
    promoterId,
    artistId,
    liveId,
    title, 
    liveDate, 
    status, 
    duration, 
    payment, 
    description,
  ) => {
    debugger;
    validateId(promoterId);
    if (typeof liveId !== "undefined") validateId(liveId);
    //TODO validations
  
    return User.findById(promoterId).then((user) => {
      if (!user) throw new NotFoundError(`user with id ${ownerId} not found`);
      debugger;
      if (liveId) {
        debugger;
        return Live.findById(activityId)
          .then((live) => {
            if (!live)
              throw new NotFoundError(`live with id ${liveId} not found`);
  
            liveId.title = title;
            liveId.description = description;
            liveId.liveDate = liveDate;
            liveId.price = price;
            liveId.status = status;
            liveId.duration = duration;
            liveId.payment = payment;
            debugger;
            return live.save();
          })
          .then((live) => live.id);
      } else
      return Live.create({
          promoterId: ObjectId(promoterId),
          artistId: ObjectId(artistId),
          title, 
          liveDate, 
          status, 
          duration, 
          payment, 
          description,
          date: new Date(),
        }).then((live) => live.id);
    });
  };