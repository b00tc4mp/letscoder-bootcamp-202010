const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

module.exports = new Schema ({
  owner: {
      type: ObjectId,
      required: true
  },

  title: {
      type: String,
      required: true
  },

  description: {
      type: String
  }
  
})