describe("SPEC modifyUser()", function () {
  const { random } = Math;

  describe("when token is not a string", function () {
    let token, changes;

    beforeEach(function () {
      token = [
        1,
        true,
        null,
        undefined,
        {},
        [],
        function () {},
        new Date(),
      ].random();
      changes = "";
    });

    it("should succeed on non-string token", function () {
      expect(function () {
        modifyUser(token, changes, function () {});
      }).toThrowError(TypeError, `${token} is not a token`);
    });
  });
  //------------------------------------------------------------------------------------------

  describe("when token is empty or blank", function () {
    let token, changes;

    beforeEach(function () {
      token = ["", " ", "\t", "\n"].random();
      changes = "";
    });

    it("should fail on empty or blank token", function () {
      expect(function () {
        modifyUser(token, changes, function () {});
      }).toThrowError(Error, `token is empty or blank`);
    });
  });
  //------------------------------------------------------------------------------------------

  describe("when changes is not an Object", function () {
    let token, changes;

    beforeEach(function () {
      changes = [3, "abc", true, undefined].random();
      token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjlmMmY3YmJiZjdmMjAwMTc0NjBhNWUiLCJpYXQiOjE2MDQyNjc5MDAsImV4cCI6MTYwNDI3MTUwMH0.rPx4d1xcUVxu-0NhNKd15VwjXa1D1ZxB9MkekmzfZqg";
    });

    it("should fail on not Object", function () {
      expect(function () {
        modifyUser(token, changes, function () {});
      }).toThrowError(TypeError, `${changes} is not a object`);
    });
  });
  //------------------------------------------------------------------------------------------

  describe("when callback is not a function", function () {
    let token, changes;

    beforeEach(function () {
      changes = { my: "change" };
      token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjlmMmY3YmJiZjdmMjAwMTc0NjBhNWUiLCJpYXQiOjE2MDQyNjc5MDAsImV4cCI6MTYwNDI3MTUwMH0.rPx4d1xcUVxu-0NhNKd15VwjXa1D1ZxB9MkekmzfZqg";
    });
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

    it("should fail on not Object", function () {
      expect(function () {
        modifyUser(token, changes, callback);
      }).toThrowError(TypeError, `${callback} is not a callback`);
    });
  });
  //------------------------------------------------------------------------------------------

  describe("when token and changes are ok", function () {
    let token, changes, fullname, email, password;

    beforeEach(function (done) {
      fullname = "John Another " + random();
      email = "john-another-" + random() + "@mail.com";
      password = "pass-" + random();
      changes = { fullname: "Pedrito", bithday: new Date("1990/1/1") };

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
              done();
            }
          );
        }
      );
    });

    it("should succeed on modify user", function (done) {
      modifyUser(token, changes, function (error) {
        expect(error).toBeNull();
        call(
          "GET",
          "https://b00tc4mp.herokuapp.com/api/v2/users",
          { Authorization: `Bearer ${token}` },
          "",
          (status, response) => {
            expect(status).toBe(200);
            const res = JSON.parse(response);
            expect(res.fullname).toBe(changes.fullname);
            expect(res.birthday).toBe(changes.birthday);
            done();
          }
        );
      });
    });

    afterEach(function (done) {
      call(
        "DELETE",
        "https://b00tc4mp.herokuapp.com/api/v2/users",
        {
          Authorization: "Bearer " + token,
          "Content-type": "application/json",
        },
        '{ "password": "' + password + '" }',
        function (status, response) {
          expect(status).toBe(204);
          expect(response.length).toBe(0);

          done();
        }
      );
    });
  });
  //------------------------------------------------------------------------------------------
});
