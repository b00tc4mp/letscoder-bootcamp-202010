const { Schema } = require("mongoose");
const {
  Types: { ObjectId },
} = Schema;

module.exports = new Schema({
  owner: {
    type: ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  materialRequired: {
    type: Boolean,
    required: false,
    default: false,
  },
  address: {
    type: String,
    required: true,
  },
  coordinates: {
    type: String,
    required: false,
  },
  coverImage: {
    type: String,
    required: false,
  },
  spots: {
    type: String,
    required: true,
  },
  sessions: {
    type: [ObjectId],
    ref: "Session",
  },
  date: {
    type: Date,
    required: true,
  },

  // firstName: {
  //   type: String,
  //   required: true,
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   validate: {
  //     validator: (email) =>
  //       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //         email
  //       ),
  //     message: (props) => `${props.value} is not a valid e-mail`,
  //   },
  // },
  // password: {
  //   type: String,
  //   required: true,
  //   minlength: 8,
  // },
});
