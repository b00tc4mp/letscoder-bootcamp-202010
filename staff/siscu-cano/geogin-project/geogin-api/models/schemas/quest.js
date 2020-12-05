const {
  Schema,
  Types: { ObjectId }
} = require('mongoose')
const Point = require('./point')

module.exports = new Schema(
  {
    title: {
      type: String
    },
    coverImg: {
      type: String
    },
    homeLocation: {
      type: Point
    },
    endLocation: {
      type: Point
    },
    time: {
      type: Date
    },
    visibility: {
      type: String,
      enum: ['public', 'private']
    },
    KidsOk: {
      type: Boolean,
      default: false
    },
    evaluations: [
      {
        type: ObjectId,
        ref: 'Evaluation'
      }
    ],
    tests: [
      {
        title: { type: String },
        image: { type: String },
        tricks: [{ type: String }],
        description: { type: String },
        location: {
          type: Point
        }
      }
    ]
  },
  { timestamps: true }
)
