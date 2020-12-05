const { Schema } = require("mongoose");

module.exports = new Schema({
  trainer: {
    type: "String",
    required: true,
  },
  title: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
    required: true,
  },
  materialRequired: {
    type: "Boolean",
    required: true,
    default: false,
  },
  coordinates: {
    type: "String",
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
