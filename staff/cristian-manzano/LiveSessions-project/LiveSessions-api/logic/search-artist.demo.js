require("dotenv").config();

const mongoose = require("mongoose");
const searchArtists = require("./search-artists");
const { User } = require("../models");

const {
  env: { MONGODB_URL },
} = process;

mongoose
  .connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
      searchArtists(' Jazz')
        .then(console.log)
        .catch(console.error),
  )
  .catch(console.error)
  .then(() => mongoose.disconnect())
  .then(() => console.log("ended"));