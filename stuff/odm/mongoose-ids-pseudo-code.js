class ObjectId {
    constructor(id) {
        this.id = id
    }

    toString() { return this.id }
}

const user = {
    _id: new ObjectId('123'),

    get id() { return this._id.toString() }
}
undefined
user._id
ObjectId {id: "123"}
user.id
"123"
delete user._id
true
user
{}
user.id
VM214:12 Uncaught TypeError: Cannot read property 'toString' of undefined
    at Object.get id [as id] (<anonymous>:12:32)
    at <anonymous>:1:6