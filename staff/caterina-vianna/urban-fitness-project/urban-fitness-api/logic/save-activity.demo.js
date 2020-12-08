require("dotenv").config();

const mongoose = require("mongoose");
const saveActivity = require("./save-activity");

const {
  env: { MONGODB_URL },
} = process;

mongoose
  .connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  // .then(() => saveNote('5fca5b424d1115677f6fe2e6', undefined, 'Hello, World!', ['hello', 'world'], 'private'))
  .then(() =>
    saveActivity(
      "5fca5b424d1115677f6fe2e6",
      undefined,
      "Yoga",
      "Yoga in the park",
      "5 euros",
      true,
      "Park de la Ciutadella",
      "Yoga",
      "Monthly",
      "10",
      Date
    )
  )
  .then(() => console.log("activity saved"))
  .catch((error) => console.error("activity could not be saved", error))
  .then(mongoose.disconnect);
