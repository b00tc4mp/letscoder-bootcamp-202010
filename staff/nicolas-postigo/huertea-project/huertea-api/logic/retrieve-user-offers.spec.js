require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger } = require('../utils/randoms')
const retrieveUserOffers = require('./retrieve-user-offers')
require('../utils/array-polyfills')
const { mongoose, mongoose: { Types: { ObjectId } }, models: { User, Offer } } = require('huertea-data')


const { env: { MONGODB_URL } } = process

describe('retrieveUserOffers()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when offers already exists', () => {
        let offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact, owner

        beforeEach(() => {
            offername = randomStringWithPrefix('offername')
            titleoffer = randomStringWithPrefix('titleoffer')
            offeraddress = randomStringWithPrefix('offeraddress')
            phonecontact = randomStringWithPrefix('phonecontact')
            emailcontact = randomStringWithPrefix('emailcontact')
            price = randomInteger(1,10)
            owner = ObjectId("5fd8eb2668bd3140d8153bcc")

            const offer = { offername, titleoffer, price, offeraddress, phonecontact, emailcontact, owner }

            return Offer.create(offer)
                .then(offer => offerId = offer.id)
        })

        it('should succeed on correct offer id', () =>
            retrieveUserOffers("5fd8eb2668bd3140d8153bcc")
                .then(offers => {
                    const [offer] = offers
                    expect(offer).to.exist
                    expect(offer.offername).to.equal(offername)
                    expect(offer.titleoffer).to.equal(titleoffer)
                    expect(offer.price).to.equal(price)
                    expect(offer.offeraddress).to.equal(offeraddress)
                    expect(offer.phonecontact).to.equal(phonecontact)
                    expect(offer.emailcontact).to.equal(emailcontact)

                })
                
        )
        afterEach(() => Offer.deleteMany())

        describe('when offer id is wrong', () => {
            let offerId

            beforeEach(() => offerId = ['5fc0efb540493de1f5a8948a', '5fc0efb540493de1f5a8940c', '5fc0efb540493de1f5a8941b'].random())

            it('should fail on wrong user id', () =>
                retrieveUserOffers(offerId)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`the user with id ${offerId} was not found`)
                    })
            )
            
        })
        
    })
    describe('when offer id is wrong', () => {
        describe('when offer id is not a string', () => {
            let offerId

            beforeEach(() => offerId = [true, 123, null, undefined, {}, function () { }, []].random())

            it('should fail on non-string user offer', () => {
                expect(() => retrieveUserOffers(offerId, () => { })).to.throw(TypeError, `${offerId} is not an id`)
            })
        })

        describe('when user offer is empty or blank', () => {
            let offerId

            beforeEach(() => offerId = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank offer id', () => {
                expect(() => retrieveUserOffers(offerId, () => { })).to.throw()
            })
        })
        describe('when user id length is not 24', () => {
            let offerId

            beforeEach(() => offerId = ['a', 'b', 'c'].random().repeat(24 + (Math.random() > 0.5 ? 3 : 3)))

            it('should fail on user offer length different from 24', () => {
                expect(() => retrieveUserOffers(offerId, () => { })).to.throw()
            })
        })
    })
    afterEach(() => Offer.deleteMany())
    after(mongoose.disconnect)
})