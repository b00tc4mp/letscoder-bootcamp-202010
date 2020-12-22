require("dotenv").config();

const { expect } = require("chai");
const {
  randomStringWithPrefix,
  randomWithPrefixAndSuffix,
  randomNonString,
  randomEmptyOrBlankString,
} = require("../utils/randoms");
const registerUser = require("./register-user");
const mongoose = require("mongoose");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
// const {ContentError} = require('../errors')

const {
  env: { MONGODB_URL },
} = process;

describe("registerUser()", () => {
  before(() =>
    mongoose.connect(MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
  );

  describe("when user does not exist", () => {
    let firstName, lastName, email, password;

    beforeEach(() => {
      firstName = `${randomStringWithPrefix("name")}`;
      lastName = `${randomStringWithPrefix("surname")}`;
      email = randomWithPrefixAndSuffix("email", "@mail.com");
      password = randomStringWithPrefix("password");
    });

    it("should succeed on new user", () =>
      registerUser(firstName, lastName, email, password)
        .then(() => User.findOne({ email }))
        .then((user) => {
          expect(user).to.exist;
          expect(user.firstName).to.equal(firstName);
          expect(user.lastName).to.equal(lastName);
          return bcrypt.compare(password, user.password);
        })
        .then((match) => expect(match).to.be.true));

    afterEach(() =>
      User.deleteOne({ email }).then((result) =>
        expect(result.deletedCount).to.equal(1)
      )
    );
  });

  describe("when user already exists", () => {
    let firstName, lastName, email, password;

    beforeEach(() => {
      firstName = `${randomStringWithPrefix("name")}`;
      lastName = ` ${randomStringWithPrefix("surname")}`;
      email = randomWithPrefixAndSuffix("email", "@mail.com");
      password = randomStringWithPrefix("password");

      const user = { firstName, lastName, email, password };

      return User.create(user);
    });

    it("should fail on existing user", () =>
      registerUser(firstName, lastName, email, password).catch((error) => {
        expect(error).to.be.instanceOf(Error);

        expect(error.message).to.equal(
          `user with e-mail ${email} already registered`
        );
      }));

    afterEach(() =>
      User.deleteOne({ email, password }).then((result) =>
        expect(result.deletedCount).to.equal(1)
      )
    );
  });

  describe("when any parameter is wrong", () => {
    describe("when e-mail is wrong", () => {
      describe("when e-mail is not a string", () => {
        let firstName, lastName, email, password;

        beforeEach(() => {
          firstName = `${randomStringWithPrefix("name")}`;
          lastName = `${randomStringWithPrefix("surname")}`;
          email = randomNonString();
          password = randomStringWithPrefix("password");
        });

        it("should fail when email is not an string", () => {
          expect(() =>
            registerUser(firstName, lastName, email, password, () => {})
          ).to.throw(TypeError, `${email} is not an e-mail`);
        });
      });

      describe("when e-mails is empty or blank", () => {
        let firstName, lastName, email, password;

        beforeEach(() => {
          firstName = `${randomStringWithPrefix(
            "name"
          )} ${randomStringWithPrefix("surname")}`;
          lastName = `${randomStringWithPrefix(
            "name"
          )} ${randomStringWithPrefix("surname")}`;
          email = randomEmptyOrBlankString();
          password = randomStringWithPrefix("password");
        });

        it("should fail on an empty or blank email", () => {
          expect(() =>
            registerUser(firstName, lastName, email, password, () => {})
          ).to.throw(Error, "e-mail is empty or blank");
        });
      });
    });
    describe("when password is wrong", () => {
      describe("when password is empty or blank", () => {
        let firstName, lastName, email, password;

        beforeEach(() => {
          firstName = `${randomStringWithPrefix(
            "name"
          )} ${randomStringWithPrefix("surname")}`;
          lastName = `${randomStringWithPrefix(
            "name"
          )} ${randomStringWithPrefix("surname")}`;
          email = randomWithPrefixAndSuffix("email", "@mail.com");
          password = randomEmptyOrBlankString();
        });

        it("should fail on an empty or blank password", () => {
          expect(() =>
            registerUser(firstName, lastName, email, password, () => {})
          ).to.throw(Error, "password is empty or blank");
        });
      });

      describe("when password is not a string", () => {
        let firstName, lastName, email, password;

        beforeEach(() => {
          firstName = `${randomStringWithPrefix(
            "name"
          )} ${randomStringWithPrefix("surname")}`;
          lastName = `${randomStringWithPrefix(
            "name"
          )} ${randomStringWithPrefix("surname")}`;
          email = randomWithPrefixAndSuffix("email", "@mail.com");
          password = randomNonString();
        });

        it("should fail when password is not an string", () => {
          expect(() =>
            registerUser(firstName, lastName, email, password, () => {})
          ).to.throw(TypeError, `${password} is not a password`);
        });
      });
    });

    describe("when firstName is wrong", () => {
      describe("when firstName is empty or blank", () => {
        let firstName, lastName, email, password;

        beforeEach(() => {
          firstName = randomEmptyOrBlankString();
          lastName = randomStringWithPrefix("lastName");
          email = randomWithPrefixAndSuffix("email", "@mail.com");
          password = randomStringWithPrefix("password");
        });

        it("should fail on an empty or blank firstName", () => {
          expect(() =>
            registerUser(firstName, lastName, email, password, () => {})
          ).to.throw(Error, "first name is empty or blank");
        });
      });

      describe("when firstName is not a string", () => {
        let firstName, lastName, email, password;

        beforeEach(() => {
          firstName = randomNonString();
          lastName = randomStringWithPrefix("lastName");
          email = randomWithPrefixAndSuffix("email", "@mail.com");
          password = randomStringWithPrefix("password");
        });

        it("should fail when firstName is not an string", () => {
          expect(() =>
            registerUser(firstName, lastName, email, password, () => {})
          ).to.throw(TypeError, `${firstName} is not a first name`);
        });
      });
    });

    // describe('when role is wrong', () => {

    //     describe('when role is not a string', () => {
    //         let firstName, email, password, role

    //         beforeEach(() => {
    //             firstName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
    //             email = randomWithPrefixAndSuffix('email', '@mail.com')
    //             password = randomStringWithPrefix('password')
    //             role = ['ARTIST', 'PROMOTER'].random()

    //         })

    //         it('should fail when role is not an string', () => {
    //             expect(() => registerUser(firstName, email, password, ['sagsafgdafg'], () => { })).to.throw(TypeError, `${role} is not an role`)
    //         })
    //     })
    // })
  });

  after(mongoose.disconnect);
});
