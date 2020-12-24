require("dotenv").config();

const mongoose = require("mongoose");
const searchActivity = require("./search-by-activity");
const { Activity } = require("../models");

const {
  env: { MONGODB_URL },
} = process;

mongoose
  .connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => searchActivity("running"))
  .then(console.log)
  .catch(console.error)
  .then(() => mongoose.disconnect())
  .then(() => console.log("ended"));
