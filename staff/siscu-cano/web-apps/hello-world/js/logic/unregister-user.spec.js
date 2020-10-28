describe("SPEC unregisterUser()", function () {
  const { random } = Math;

  describe("when user already exists", function () {
    let fullname, email, password, token;

    beforeEach(function (done) {
      fullname = `fullname-${random()}`;
      email = `email-${random()}@unregister.com`;
      password = `password-${random()}`;

      call(
        "POST",
        "https://b00tc4mp.herokuapp.com/api/v2/users",
        { "Content-type": "application/json" },
        JSON.stringify({ fullname, username: email, password }),
        function (status, response) {
          expect(status).toBe(201);
          expect(response.length).toBe(0);

          call(
            "POST",
            "https://b00tc4mp.herokuapp.com/api/v2/users/auth",
            { "Content-type": "application/json" },
            JSON.stringify({ username: email, password }),
            function (status, response) {
              token = JSON.parse(response).token;
              expect(status).toBe(200);
              expect(response.length).toBeGreaterThan(0);
              expect(token.length).toBeGreaterThan(0);

              done();
            }
          );
        }
      );
    });
    it("should succeed unregister user", function (done) {
      unregisterUser(token, password, function (error) {
        expect(error).toBeNull();
        call(
          "GET",
          "https://b00tc4mp.herokuapp.com/api/v2/users",
          {
            Authorization: "Bearer " + token,
          },
          undefined,
          function (status, res) {
            expect(status).toBe(404);
            let [, payload] = token.split(".");
            let json = atob(payload);
            let obj = JSON.parse(json);
            let { sub: id } = obj;
            expect(JSON.parse(res).error).toBe(
              `user with id "${id}" does not exist`
            );
            done();
          }
        );
      });
    });
  });

  describe("when user not exists (token random)", function () {
    let password, token;

    beforeEach(function () {
      password = `password-${random()}`;
      token = `token-${random()}`;
    });

    it("should fail on unregister user", function (done) {
      unregisterUser(token, password, function (error) {
        expect(error).toBeDefined();
        expect(error.message).toBe(`invalid token`);
        done();
      });
    });
  });
});
