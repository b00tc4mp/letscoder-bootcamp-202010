const { validateId } = require('./helpers/validations')
const { User } = require('../models')
const { Offer } = require('../models')
const { NotFoundError } = require('../errors')
const { ObjectID } = require('mongodb')

module.exports = function (ownerId) {
    validateId(ownerId)

    const _id = ObjectID.createFromHexString(ownerId);

    return User
        .findById({ _id })
        .then((user) => {
            if (user) {

                const cursor = Offer.find().sort({ date: -1 }); 

                return cursor.lean()
                    .then(_offers => {
                        if (_offers)
                            return _offers = _offers.map(({ _id, offername, titleoffer, image, price, owner }) => ({ id: _id.toHexString(), offername, titleoffer, image, price, owner }))
                        else throw new NotFoundError('there are no offers to retrieve')
                    });

            } else throw new NotFoundError(`the user with id ${ownerId} was not found`);
        });
} 
