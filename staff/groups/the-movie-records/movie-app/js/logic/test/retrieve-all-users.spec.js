describe("SPEC retrieve_all_users()", function () {
  const { random } = Math;

  describe("when token is a not string", function () {
    let token;

    beforeEach(function () {
      token = [1, true, null, undefined, {}, []].random();
    });

    it("should fail if token is not a string", function () {
      expect(function () {
        retrieveAllUsers(token, function () {});
      }).toThrowError(TypeError, `${token} is not a token`);
    });
  });

  //--------------------------------------------------------------------------------

  describe("when token is empty or blank", function () {
    let token;

    beforeEach(function () {
      token = ["", " ", "\t", "\n"].random();
    });

    it("should fail if token is empty or blank", function () {
      expect(function () {
        retrieveAllUsers(token, function () {});
      }).toThrowError(Error, `token is empty or blank`);
    });
  });
  //--------------------------------------------------------------------------------------
  describe("when function is not a callback", function () {
    let token;

    beforeEach(function () {
      token = random().toString();
      callback = [
        1,
        true,
        null,
        undefined,
        {},
        [],
        "string",
        new Date(),
      ].random();
    });

    it("should fail if callback is not a function", function () {
      expect(function () {
        retrieveAllUsers(token, callback);
      }).toThrowError(TypeError, `${callback} is not a callback`);
    });
  });

  //-----------------------------------------------------------------------------------------

  describe("when retrieve all user is a success", function () {
    let fullname, email, password, token;
    beforeEach(function (done) {
      fullname = "john another " + random();
      email = "john-another-" + random() + "@mail.com";
      password = "pass-" + random();
      token = "";

      call(
        "POST",
        "https://b00tc4mp.herokuapp.com/api/v2/users",
        { "Content-type": "application/json" },
        '{ "fullname": "' +
          fullname +
          '", "username": "' +
          email +
          '", "password": "' +
          password +
          '" }',
        function (status) {
          expect(status).toBe(201);
          call(
            "POST",
            "https://b00tc4mp.herokuapp.com/api/v2/users/auth",
            { "Content-type": "application/json" },
            '{ "username": "' + email + '", "password": "' + password + '" }',
            function (status, response) {
              expect(status).toBe(200);
              token = JSON.parse(response).token;
              console.log(token);
              done();
            }
          );
        }
      );
    });
    it("should success on retrieve all users", function (done) {
      console.log(token);
      retrieveAllUsers(token, function (error, users) {
        expect(users).toBeDefined();
        expect(error).toBeNull();
        done();
      });
    });

    //---------------------------------------------------------------------------------------

    afterEach(function (done) {
      call(
        "DELETE",
        "https://b00tc4mp.herokuapp.com/api/v2/users",
        {
          Authorization: "Bearer " + token,
          "Content-type": "application/json",
        },
        '{ "password": "' + password + '" }',
        function (status) {
          expect(status).toBe(204);
          done();
        }
      );
    });
  });
});
