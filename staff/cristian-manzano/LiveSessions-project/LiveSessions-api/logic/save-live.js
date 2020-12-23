
const {
    validateId,
  } = require("./helpers/validations");
  //TODO VALIDATIONS

  const { ObjectId } = require("mongodb");
  const { NotFoundError } = require("../errors");
  const { User, Live } = require("../models");
  
  module.exports = (
    promoterId,
    artistId,
    _id,
    title, 
    liveDate, 
    status, 
    duration, 
    payment, 
    description,
  ) => {
    debugger;
    // validateId(promoterId);
    if (typeof promoterId !== "undefined") validateId(promoterId);
    if (typeof _id !== "undefined") validateId(_id);
    //TODO validations
  
    return User.findById(promoterId).then((user) => {
      if (!user) throw new Error(`user with id ${promoterId} not found`);
      debugger;
      if (_id) {
        debugger;
        return Live.findById({_id})
          .then((live) => {
            if (!live)
              throw new Error(`live with id ${_id} not found`);
  
            _id.title = title;
            _id.description = description;
            _id.liveDate = liveDate;
            _id.status = status;
            _id.duration = duration;
            _id.payment = payment;
            _id.description = description;
            debugger;
            return live.updateOne({status});
          })
          .then((live) => live._id);
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
        }).then((live) => live._id);
    });
  };