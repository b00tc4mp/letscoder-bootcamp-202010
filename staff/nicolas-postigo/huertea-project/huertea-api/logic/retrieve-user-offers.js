const { validateId } = require('./helpers/validations')
const { models: { User } } = require('huertea-data')
const { Offer } = require('huertea-data/models')
const { NotFoundError } = require('../errors')
const { ObjectID } = require('mongodb')


/**
 * Retrieves a offer by ownerId
 * 
 * @param {string} ownerId 
 * 
 * @returns {Promise} offer and user info
 * 
 * @throws {NotFoundError} if the ownerId does not exist
 */


module.exports = function (ownerId) {
    validateId(ownerId)

    const _id = ObjectID.createFromHexString(ownerId);

    return User
        .findById({ _id })
        .then((user) => {
            if (user) {

                const cursor = Offer.find({ owner: ownerId }).sort({ date: -1 }); 

                return cursor.lean()
                    .then(_offers => {
                        if (_offers)
                            return _offers = _offers.map(({ _id, offername, titleoffer, image, offeraddress, phonecontact, emailcontact, price, owner }) => ({ id: _id.toHexString(), offername, titleoffer, image, offeraddress, phonecontact, emailcontact, price, owner }))
                        else throw new NotFoundError('there are no offers to retrieve')
                        
                    });

            } else throw new NotFoundError(`the user with id ${ownerId} was not found`);
        });
} 
