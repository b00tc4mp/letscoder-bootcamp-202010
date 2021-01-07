require("dotenv").config();

 const { expect } = require("chai");
 const {
   randomStringWithPrefix,
   randomWithPrefixAndSuffix,
   randomNonString,
   randomEmptyOrBlankString,
 } = require("../utils/randoms");
 const saveActivity = require("./save-activity");
 const mongoose = require("mongoose");
 const { User } = require("../models");
 const bcrypt = require("bcryptjs");
 // const {ContentError} = require('../errors')

 const {
   env: { MONGODB_URL },
 } = process;

 describe("saveLive()", () => {
   before(() =>
     mongoose.connect(MONGODB_URL, {
       useUnifiedTopology: true,
       useNewUrlParser: true,
       useCreateIndex: true,
     })
   );

   describe("when user already exists", () => {
    let fullname, email, password, promoterId

     beforeEach(() => {
       firstName = `${randomStringWithPrefix("name")}`;
       lastName = `${randomStringWithPrefix("surname")}`;
       email = randomWithPrefixAndSuffix("email", "@mail.com");
       password = randomStringWithPrefix("password");

       const user = { fullname, email, password };

       return users
         .insertOne(user)
         .then((result) => (promoterId = result.insertedId.toString()));
     });

     describe("when user doesn't have activities", () => {
       let ownerId,
         activityId,
         title,
         description,
         price,
         checked,
         address,
         sport,
         repeat,
         spots,
         selectedItems,
         duration;

       beforeEach(() => {
         title = randomStringWithPrefix("title");
         description = randomStringWithPrefix("description");
         price = randomStringWithPrefix("price");
         checked = randomStringWithPrefix("checked");
         address = randomStringWithPrefix("address");
         sport = randomStringWithPrefix("sport");
         repeat = randomStringWithPrefix("repeat");
         spots = randomStringWithPrefix("spots");
         selectedItems = randomStringWithPrefix("selectedItems");
         duration = randomStringWithPrefix("durarion");
         tags = new Array(randomInteger(10, 100));

         for (let i = 0; i < tags.length; i++)
           tags[i] = randomStringWithPrefix("tag");
       });

       it("should succeed creating a new activity", () =>
         saveNote(
           ownerId,
           undefined,
           activityId,
           title,
           description,
           price,
           checked,
           address,
           sport,
           repeat,
           spots,
           selectedItems,
           duration
         ).then(() => {
           const cursor = activities.find({ owner: ObjectId(ownerId) });

           return cursor.toArray().then((activities) => {
             expect(activities).to.have.lengthOf(1);

             const [note] = activities;

             expect(note.text).to.equal(text);

             expect(note.tags).to.deep.equal(tags);
             expect(note.visibility).to.equal(visibility);
             expect(note.date).to.be.instanceOf(Date);
           });
         }));

       afterEach(() =>
         activities
           .deleteMany({ owner: ObjectId(ownerId) })
           .then((result) => expect(result.deletedCount).to.equal(1))
       );
     });
   });

   after(mongoose.disconnect);
 });