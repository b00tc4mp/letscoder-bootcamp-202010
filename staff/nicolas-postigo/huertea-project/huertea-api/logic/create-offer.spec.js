require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger } = require('../utils/randoms')
const createOffer = require('./create-offer')
require('../utils/array-polyfills')
const { mongoose, mongoose: { Types: { ObjectId } }, models: { User, Offer } } = require('huertea-data')


const { env: { MONGODB_URL } } = process

describe('createOffer()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let fullname, email, password, ownerId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return User.create(user)
                .then(user => ownerId = user.id)
        })

        describe('when user doesn\'t have offers', () => {
            let offername, titleoffer, price, offeraddress, phonecontact, emailcontact

            beforeEach(() => {
                offername = randomStringWithPrefix('offername')
                titleoffer = randomStringWithPrefix('titleoffer')
                offeraddress = randomStringWithPrefix('offeraddress')
                phonecontact = randomStringWithPrefix('phonecontact')
                emailcontact = randomStringWithPrefix('emailcontact')
                price = randomInteger(1,10)
            })

            it('should succeed creating a new offer', () =>
                createOffer(ownerId, undefined, offername, titleoffer, price, offeraddress, phonecontact, emailcontact)
                .then(console.log(price))
                    .then(offerId => {
                        expect(ObjectId.isValid(offerId)).be.true

                        return Offer.find({ owner: ownerId })
                    })
                    .then(offers => {
                        expect(offers).to.have.lengthOf(1)

                        const [offer] = offers

                        expect(offer.offername).to.equal(offername)
                        expect(offer.titleoffer).to.deep.equal(titleoffer)
                        expect(offer.price).to.equal(price)
                        expect(offer.offeraddress).to.deep.equal(offeraddress)
                        expect(offer.phonecontact).to.deep.equal(phonecontact)
                        expect(offer.emailcontact).to.deep.equal(emailcontact)
                    })
            )

        })

        describe('when user already has offers', () => {
            let offername, titleoffer, price, offeraddress, phonecontact, emailcontact

            beforeEach(() => {
                offername = randomStringWithPrefix('offername')
                titleoffer = randomStringWithPrefix('titleoffer')
                offeraddress = randomStringWithPrefix('offeraddress')
                phonecontact = randomStringWithPrefix('phonecontact')
                emailcontact = randomStringWithPrefix('emailcontact')
                price = randomInteger(1,10)


                return Offer.create({offername, titleoffer, price, owner: ownerId, offeraddress, phonecontact, emailcontact })
                    .then(offer => offerId = offer.id)
            })

            it('should succeed updating the offer', () => {



                return createOffer(ownerId, offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact)
                    .then(offerId => {
                        expect(ObjectId.isValid(offerId)).be.false

                        return Offer.find({ owner: ownerId })
                    })
                    .then(offers => {
                        expect(offers).to.have.lengthOf(1)

                        const [offer] = offers

                        expect(offer.offername).to.equal(offername)
                        expect(offer.titleoffer).to.deep.equal(titleoffer)
                        expect(offer.price).to.equal(price)
                        expect(offer.offeraddress).to.deep.equal(offeraddress)
                        expect(offer.phonecontact).to.deep.equal(phonecontact)
                        expect(offer.emailcontact).to.deep.equal(emailcontact)
                    })
            })


        })

        describe('when user offer does not exist (it was removed from db)', () => {
            let offername, titleoffer, price, offeraddress, phonecontact, emailcontact, offerId

            beforeEach(() => {
                offerId = '5fd5092bf044ad0fccacea82'

                offername = randomStringWithPrefix('offername')
                titleoffer = randomStringWithPrefix('titleoffer')
                offeraddress = randomStringWithPrefix('offeraddress')
                phonecontact = randomStringWithPrefix('phonecontact')
                emailcontact = randomStringWithPrefix('emailcontact')
                price = randomInteger(1,10)
            })

            it('should fail on trying to update a offer that does not exist any more', () =>
                createOffer(ownerId, offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`offer with id ${offerId} not found`)
                    })
            )
        })


    })

    describe('when user does not exist', () => {
        let offername, titleoffer, price, offeraddress, phonecontact, emailcontact

        beforeEach(() => {
            ownerId = '5fc3e2d6a3aacb132c1bb4b9'


            offername = randomStringWithPrefix('offername')
            titleoffer = randomStringWithPrefix('titleoffer')
            offeraddress = randomStringWithPrefix('offeraddress')
            phonecontact = randomStringWithPrefix('phonecontact')
            emailcontact = randomStringWithPrefix('emailcontact')
            price = randomInteger()
        })

        it('should fail alerting user with id does not exist', () =>
            createOffer(ownerId, undefined, offername, titleoffer, price, offeraddress, phonecontact, emailcontact)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id  ${ownerId}  not found`)
                })
        )
    })


    after(mongoose.disconnect)
}) 