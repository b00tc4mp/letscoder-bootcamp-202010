const { expect } = require("chai");
const authenticateUser = require("./authenticate-user");
const { createId } = require("../utils/ids");
const {
  randomStringWithPrefix,
  randomWithPrefixAndSuffix,
  randomNonString,
  randomEmptyOrBlankString,
} = require("../utils/randoms");
const fs = require("fs");
const path = require("path");

describe("authenticateUser()", () => {
  describe("when user already exists", () => {
    let id, fullname, email, password, file;

    beforeEach((done) => {
      id = createId();
      fullname = `${randomStringWithPrefix("name")} ${randomStringWithPrefix(
        "surname"
      )}`;
      email = randomWithPrefixAndSuffix("email", "@mail.com");
      password = randomStringWithPrefix("password");

      const user = { id, fullname, email, password };

      const json = JSON.stringify(user);

      file = path.join(__dirname, `../data/users/${id}.json`);

      fs.writeFile(file, json, done);
    });

    it("should succeed on correct credentials", (done) => {
      authenticateUser(email, password, (error, userId) => {
        expect(error).to.be.null;
        debugger;
        expect(userId).to.be.a("string");
        expect(userId).to.have.length.greaterThan(0);

        done();
      });
    });

    describe("when wrong credentials", () => {
      it("should fail on wrong e-mail", (done) => {
        authenticateUser(`wrong${email}`, password, (error, userId) => {
          expect(error).to.be.instanceOf(Error);
          expect(error.message).to.equal("wrong credentials");

          expect(userId).to.be.undefined;

          done();
        });
      });

      it("should fail on wrong password", (done) => {
        authenticateUser(email, `wrong${password}`, (error, userId) => {
          expect(error).to.be.instanceOf(Error);
          expect(error.message).to.equal("wrong credentials");

          expect(userId).to.be.undefined;

          done();
        });
      });
    });

    afterEach((done) => fs.unlink(file, done));
  });

  describe("when user does not exist", () => {
    let email, password;

    beforeEach(() => {
      email = randomWithPrefixAndSuffix("email", "@mail.com");
      password = randomStringWithPrefix("password");
    });

    it("should fail on valid credentials", (done) => {
      authenticateUser(email, password, (error, userId) => {
        expect(error).to.be.instanceOf(Error);
        expect(error.message).to.equal("wrong credentials");

        expect(userId).to.be.undefined;

        done();
      });
    });
  });

  describe("when any parameter is wrong", () => {
    describe("when e-mail is wrong", () => {
      describe("when e-mails is not a string", () => {
        let email, password;

        beforeEach(() => {
          email = randomNonString();
          password = randomStringWithPrefix("password");
        });

        it("should fail on empty or blank email", () => {
          expect(() => authenticateUser(email, password, () => {})).to.throw(
            TypeError,
            `${email} is not an e-mail`
          );
        });
      });

      describe("when e-mails is empty or blank", () => {
        let email, password;

        beforeEach(() => {
          email = randomEmptyOrBlankString();
          password = randomStringWithPrefix("password");
        });

        it("should fail on non-string email", () => {
          expect(() => authenticateUser(email, password, () => {})).to.throw(
            Error,
            "e-mail is empty or blank"
          );
        });
      });
    });

    // TODO when password is wrong and its subcases
    // TODO when callback is wrong
  });
});
