const {
  Schema,
  Types: { ObjectId }
} = require('mongoose')

module.exports = new Schema(
  {
    evaluation: {
      type: Number,
      default: 0
    },
    created: {
      type: Date,
      required: true,
      default: Date.now
    },
    comment: {
      type: String
    },
    player: {
      type: ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)
