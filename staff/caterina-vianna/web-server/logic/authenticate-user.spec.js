const { expect } = require("chai");
const authenticateUser = require("./authenticate-user");
const { createId } = require("../utils/ids");
const {
  randomStringWithPrefix,
  randomWithPrefixAndSuffix,
} = require("../utils/randoms");
const fs = require("fs");

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

      file = `./data/users/${id}.json`;

      fs.writeFile(file, json, done);
    });

    it("should succeed on correct credentials", (done) => {
      authenticateUser(email, password, (error, userId) => {
        expect(error).to.be.null;

        expect(userId).to.be.a("string");
        expect(userId).to.have.length.greaterThan(0);

        done();
      });
    });

    it("should fail on wrong credentials", (done) => {
      authenticateUser(email, "password", (error, userId) => {
        expect(error).to.not.equal("null");
        expect(error.message).to.equal("wrong credentials");
        expect(error).to.be.instanceOf(Error);
        expect(userId).to.be.an("undefined");
        done();
      });
    });

    afterEach((done) => fs.unlink(file, done));
  });

  describe("when user does not exist", () => {
    let id, fullname, email, password, file;

    beforeEach(() => {
      id = createId();
      fullname = `${randomStringWithPrefix("name")} ${randomStringWithPrefix(
        "surname"
      )}`;
      email = randomWithPrefixAndSuffix("email", "@mail.com");
      password = randomStringWithPrefix("password");

      const user = { id, fullname, email, password };
    });

    it("should fail on wrong credentials", (done) => {
      authenticateUser(email, password, (error, userId) => {
        expect(error).to.not.equal("null");
        expect(error.message).to.equal("wrong credentials");
        expect(error).to.be.instanceOf(Error);
        expect(userId).to.be.an("undefined");
        done();
      });
    });

    // TODO
  });

  describe("when any parameter is wrong", () => {
    let id, fullname, email, password;
    beforeEach(() => {
      id = createId();
      fullname = `${randomStringWithPrefix("name")} ${randomStringWithPrefix(
        "surname"
      )}`;
      email = 2222;
      debugger;
      password = randomStringWithPrefix("password");
    });

    it("should fail on email was a number", () => {
      expect(() => authenticateUser(email, password, () => {})).to.throw(
        TypeError,
        `${email} is not a email`
      );
    });

    it("should fail on email is empty", () => {
      expect(() => authenticateUser("", password, () => {})).to.throw(
        Error,
        `email is empty or blank`
      );
    });

    it("should fail on invalid email", () => {
      expect(() => authenticateUser("pp", password, () => {})).to.throw(
        Error,
        `invalid e-mail`
      );
    });

    it("should fail on password is not a string");
    expect(() => authenticateUser(email, null, () => {})).to.throw(
      TypeError,
      `${password} is not a string`
    );
  });
});
