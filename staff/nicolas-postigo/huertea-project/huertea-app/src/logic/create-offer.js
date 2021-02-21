import { call } from '../utils'
import { validateOffer, validateToken, validateTitleoffer, validateId, validateOfferAddress, validatePhoneContact, validateEmailContact, validateCallback } from './helpers/validations'
import context from './context'
/**
 *  Upload offer
 * 
 * @param {string} token use to know shelterId
 * @param {string} offerId offer's identification number(ObjectId)
 * @param {Stream} offername offer name
 * @param {Stream} titleoffer offer breed
 * @param {Stream} price offer species
 * @param {Stream} offeraddress offer color
 * @param {Stream} phonecontact offer description
 * @param {Stream} emailcontact offer description
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 * 
 * @returns {array} returns array of objects with the offer info
 */
export default (function (token, offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact, callback) {
    validateToken(token)
    if (typeof offerId !== 'undefined') validateId(offerId)
    validateOffer(offername)
    validateTitleoffer(titleoffer)
    validateOfferAddress(offeraddress)
    validatePhoneContact(phonecontact)
    validateEmailContact(emailcontact)
    validateCallback(callback)

    const { API_URL } = this


    call('POST', `${API_URL}/offer`, { 'Content-type': 'application/json', 
    Authorization: `Bearer ${token}`,
    },
    JSON.stringify({ offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact}),
    (status, response) => {
        if (status === 0)
            return callback(new Error('server error'))
        else if (status !== 201) {
            const { error } = JSON.parse(response)

            return callback(new Error(error))
        }
        const { offerId } = JSON.parse(response)

        callback(null, offerId)
    })

}).bind(context) 
