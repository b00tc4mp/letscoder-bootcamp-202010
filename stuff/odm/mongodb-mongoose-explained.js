// MongoDB collections

const db = {}

class ObjectId {
    constructor(id) {
        this.id = id || `${Date.now()}`
    }

    toString() { return this.id }
}

class Collection {
    constructor(name) {
        this.name = name

        this.docs = []
    }

    insertOne(doc) {
        doc._id = new ObjectId

        doc = { ...doc }

        this.docs.push(doc)
    }

    find(criteria) {
        return this.docs.filter(doc => {
            for (const property in criteria)
                if (doc[property] !== criteria[property]) return false

            return true
        }).map(doc => ({ ...doc }))
    }

    findOne(criteria) {
        const doc = this.docs.find(doc => {
            for (const property in criteria)
                if (doc[property] !== criteria[property]) return false

            return true
        })

        return doc? { ...doc } : null
    }

    updateOne(criteria, update) {
        const doc = this.docs.find(doc => {
            for (const property in criteria)
                if (doc[property] !== criteria[property]) return false

            return true
        })

        const { $set } = update

        for (const property in $set)
            doc[property] = $set[property]
    }
}

db.users = new Collection('users')
db.users.insertOne({ fullname: 'Pepito Grillo', country: 'France', email: 'pepito@grillo.com', password: '123123123' })
db.users.insertOne({ fullname: 'Fula Nito', country: 'Netherlands', email: 'fula@nito.com', password: '123123123' })
db.users.insertOne({ fullname: 'Menga Nito', country: 'Netherlands', email: 'menga@nito.com', password: '123123123' })

// Mongoose

class User {
    constructor(doc) {
        if (!doc._id) doc._id = new ObjectId

        this._doc = doc

        for (const property in doc) {
            Object.defineProperty(this, property, {
                get() { return this._doc[property] },
                set(value) { this._doc[property] = value }
            })
        }
    }

    save() {
        const collection = db[`${this.constructor.name.toLowerCase()}s`]

        const doc = collection.findOne({ _id: this._id })

        if (!doc)
            collection.insertOne(this._doc)
        else
            collection.updateOne({ _id: this._id }, { $set: this._doc })
    }

    static find(criteria) {
        const collection = db[`${User.name.toLowerCase()}s`]

        const docs = collection.find(criteria)

        return docs.map(doc => new User(doc))
    }
}


const user = new User({ fullname: 'Manuel Barzi', email: 'manuel@barzi.com', password: '123123123' })
user.save()

console.log('save new user', db.users.find({}))

const [, , , _user] = User.find()

_user.fullname = 'Manu Barzi'
_user.save()

console.log('update that user', db.users.find({}))

const users = User.find({ country: 'Netherlands' })

const [user1, user2] = users

user1.country = 'Germany'

console.log('show that altering the model does not alter the db', db.users.find({}))

user1.save()

console.log('show that saving that user alters the db', db.users.find({}))


















VM3379:108 save new user (4) [{…}, {…}, {…}, {…}]0: {fullname: "Pepito Grillo", country: "France", email: "pepito@grillo.com", password: "123123123", _id: ObjectId}1: {fullname: "Fula Nito", country: "Netherlands", email: "fula@nito.com", password: "123123123", _id: ObjectId}2: {fullname: "Menga Nito", country: "Netherlands", email: "menga@nito.com", password: "123123123", _id: ObjectId}3: {fullname: "Manuel Barzi", email: "manuel@barzi.com", password: "123123123", _id: ObjectId}length: 4__proto__: Array(0)
VM3379:115 update that user (4) [{…}, {…}, {…}, {…}]0: {fullname: "Pepito Grillo", country: "France", email: "pepito@grillo.com", password: "123123123", _id: ObjectId}1: {fullname: "Fula Nito", country: "Netherlands", email: "fula@nito.com", password: "123123123", _id: ObjectId}2: {fullname: "Menga Nito", country: "Netherlands", email: "menga@nito.com", password: "123123123", _id: ObjectId}3: {fullname: "Manu Barzi", email: "manuel@barzi.com", password: "123123123", _id: ObjectId}length: 4__proto__: Array(0)
VM3379:123 show that altering the model does not alter the db (4) [{…}, {…}, {…}, {…}]0: {fullname: "Pepito Grillo", country: "France", email: "pepito@grillo.com", password: "123123123", _id: ObjectId}1: {fullname: "Fula Nito", country: "Netherlands", email: "fula@nito.com", password: "123123123", _id: ObjectId}2: {fullname: "Menga Nito", country: "Netherlands", email: "menga@nito.com", password: "123123123", _id: ObjectId}3: {fullname: "Manu Barzi", email: "manuel@barzi.com", password: "123123123", _id: ObjectId}length: 4__proto__: Array(0)
VM3379:127 show that saving that user alters the db (4) [{…}, {…}, {…}, {…}]0: {fullname: "Pepito Grillo", country: "France", email: "pepito@grillo.com", password: "123123123", _id: ObjectId}1: {fullname: "Fula Nito", country: "Germany", email: "fula@nito.com", password: "123123123", _id: ObjectId}2: {fullname: "Menga Nito", country: "Netherlands", email: "menga@nito.com", password: "123123123", _id: ObjectId}3: {fullname: "Manu Barzi", email: "manuel@barzi.com", password: "123123123", _id: ObjectId}length: 4__proto__: Array(0)
undefined