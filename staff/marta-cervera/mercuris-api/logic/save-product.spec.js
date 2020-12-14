require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger } = require('notes-utils/randoms')
require('notes-utils/array-polyfills')
const saveNote = require('./save-note')
const { mongoose, mongoose: { Types: { ObjectId } }, models: { User, Note } } = require('notes-data')

const { env: { MONGODB_URL } } = process

describe('saveProduct()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let name, email, password, ownerId

        beforeEach(() => {
            name = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { name, email, password }

            return User.create(user)
                .then(user => ownerId = user.id)
        })

        describe('when user doesn\'t have product', () => {
            //productId, ownerId, name, description, price)
            let name, description, price

            beforeEach(() => {
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                price = randomInteger(10, 100)
                
            })

            it('should succeed creating a new product', () =>
                saveNote(undefined, name, description, price)
                    .then(productId => {
                        expect(ObjectId.isValid(productId)).be.true

                        return Product.find({ owner: ownerId })
                    })
                    .then(products => {
                        expect(products).to.have.lengthOf(1)

                        const [product] = notes

                        expect(product.name).to.equal(name)
                        expect(product.description).to.equal(description)
                        expect(product.price).to.equal(Number)

                       
                    })
            )

            afterEach(() => Product.deleteMany())
        })

        describe('when user already has products', () => {
            let name, description, price

            beforeEach(() => {
                name = randomStringWithPrefix('text')
                description = randomStringWithPrefix('description')
                

                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                visibility = ['public', 'private'].random()

                return Note.create({ text, tags, visibility, owner: ownerId, date: new Date })
                    .then(note => noteId = note.id)
            })

            it('should succeed updating the note', () => {
                text = randomStringWithPrefix('text')
                tags = new Array(randomInteger(10, 100))

                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                visibility = ['public', 'private'].random()

                return saveNote(ownerId, noteId, text, tags, visibility)
                    .then(noteId => {
                        expect(ObjectId.isValid(noteId)).be.true

                        return Note.find({ owner: ownerId })
                    })
                    .then(notes => {
                        expect(notes).to.have.lengthOf(1)

                        const [note] = notes

                        expect(note.text).to.equal(text)

                        expect(note.tags).to.deep.equal(tags)
                        expect(note.visibility).to.equal(visibility)
                        expect(note.date).to.be.instanceOf(Date)
                    })
            })

            afterEach(() => Note.deleteMany())
        })

        describe('when user note does not exist (it was removed from db)', () => {
            let text, tags, visibility, noteId

            beforeEach(() => {
                noteId = '5fbcd46c1cc24f9c7ce22db0'

                text = randomStringWithPrefix('text')
                tags = new Array(randomInteger(10, 100))

                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                visibility = ['public', 'private'].random()
            })

            it('should fail on trying to update a note that does not exist any more', () =>
                saveNote(ownerId, noteId, text, tags, visibility)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`note with id ${noteId} not found`)
                    })
            )
        })

        afterEach(() => User.deleteMany())
    })

    describe('when user does not exist', () => {
        let text, tags, visibility, ownerId

        beforeEach(() => {
            ownerId = '5fbcd46c1cc24f9c7ce22db1'

            text = randomStringWithPrefix('text')
            tags = new Array(randomInteger(10, 100))

            for (let i = 0; i < tags.length; i++)
                tags[i] = randomStringWithPrefix('tag')

            visibility = ['public', 'private'].random()
        })

        it('should fail alerting user with id does not exist', () =>
            saveNote(ownerId, undefined, text, tags, visibility)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${ownerId} not found`)
                })
        )
    })

    // TODO more unit test cases

    after(mongoose.disconnect)
})