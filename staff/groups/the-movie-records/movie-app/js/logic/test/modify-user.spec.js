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
});
