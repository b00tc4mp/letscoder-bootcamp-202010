const {
  Schema,
  Types: { ObjectId }
} = require('mongoose')

module.exports = new Schema(
  {
    qrCode: {
      type: String
    },
    teams: [
      {
        name: {
          type: String
        },
        players: [
          {
            type: ObjectId,
            ref: 'User'
          }
        ]
      }
    ],
    players: [
      {
        type: ObjectId,
        ref: 'User'
      }
    ],
    quest: {
      type: ObjectId,
      ref: 'Quest'
    },
    progress: [
      {
        player: {
          type: ObjectId,
          ref: 'User'
        },
        quest: {
          type: ObjectId,
          ref: 'Quest'
        }
      }
    ],
    organizer: {
      type: ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)
