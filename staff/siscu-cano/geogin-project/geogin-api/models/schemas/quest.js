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
    description: {
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
    private: {
      type: Boolean,
      default: false
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
        qr: { 
          type: String
        },
        title: { 
          type: String,
          default: ''
        },
        image: { 
          type: String,
          default: ''
        },
        trickOne: { 
          type: String ,
          default: ''
        },
        trickTwo: { 
          type: String ,
          default: ''
        },
        trickThree: { 
          type: String ,
          default: ''
        },
        description: { type: String },
        location: {
          type: Point
        }
      }
    ],
    description: {
      type: String
    },
    owner: {
      type: ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)
