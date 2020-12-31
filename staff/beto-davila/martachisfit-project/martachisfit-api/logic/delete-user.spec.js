// require('dotenv').config()

// const { expect } = require('chai')
// const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('martachisfit-utils').randoms
// const deleteUser = require('./delete-user')
// const { models: { User }, mongoose } = require('martachisfit-data')

// const { env: { MONGODB_URL } } = process

// describe('SPEC deleteUser()', () => {
//     before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

//     describe('when user already exists', () => {
//         let userId, fullname, email, password, calories

//         beforeEach(async() => {
//             fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
//             email = randomWithPrefixAndSuffix('email', '@mail.com')
//             password = randomStringWithPrefix('password')
//             calories = Math.floor(Math.random() * 3000)

//             const user = { fullname, email, password, calories }

//             const user = await User.create(user)
//                 userId = user._id
//         })

//         it('should succeed on successful user profile deletion', () =>
//             deleteUser(userId).then(result => expect(result.deletedCount).to.equal(1)))


//         describe('when wrong credentials', () => {
//             it('should fail on wrong e-mail', () =>
//                 deleteUser(`hola${email}`, password)
//                     .catch(error => {
//                         expect(error).to.be.instanceOf(Error)

//                         expect(error.message).to.equal('wrong credentials')
//                     })
//             )

//             it('should fail on wrong password', () =>
//                 deleteUser(email, `wrong${password}`)
//                     .catch(error => {
//                         expect(error).to.be.instanceOf(Error)

//                         expect(error.message).to.equal('wrong credentials')
//                     })
//             )
//         })

//         afterEach(() =>
//             User.deleteOne({ _id: userId }).then(result => expect(result.deletedCount).to.equal(1)))
//     })

//     describe('when user does not exist', () => {
//         let email, password

//         beforeEach(() => {
//             email = randomWithPrefixAndSuffix('email', '@mail.com')
//             password = randomStringWithPrefix('password')
//         })

//         it('should fail on valid credentials', () =>
//             deleteUser(email, password)
//                 .catch(error => {
//                     expect(error).to.be.instanceOf(Error)

//                     expect(error.message).to.equal('wrong credentials')
//                 })
//         )
//     })

//     describe('when any parameter is wrong', () => {
//         describe('when e-mail is wrong', () => {
//             describe('when e-mails is not a string', () => {
//                 let email, password

//                 beforeEach(() => {
//                     email = randomNonString()
//                     password = randomStringWithPrefix('password')
//                 })

//                 it('should fail on empty or blank email', () => {
//                     expect(() => deleteUser(email, password, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
//                 })
//             })

//             describe('when e-mails is empty or blank', () => {
//                 let email, password

//                 beforeEach(() => {
//                     email = randomEmptyOrBlankString()
//                     password = randomStringWithPrefix('password')
//                 })

//                 it('should fail on non-string email', () => {
//                     expect(() => deleteUser(email, password, () => { })).to.throw(Error, 'e-mail is empty or blank')
//                 })
//             })
//         })
//     })

//     after(mongoose.disconnect)
// })