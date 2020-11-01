describe("SPEC registerUser()", function () {
  const { random } = Math;

  describe("when succeed on new user", function () {
    let fullname, email, password, repassword;

    beforeEach(function () {
      fullname = "John Doe " + random();
      email = "johndoe-" + random() + "@mail.com";
      password = "pass-" + random();
      repassword = password;
    });

    it("should succeed on right token", function (done) {
      registerUser(fullname, email, password, repassword, function (error) {
        expect(error).toEqual(null);
        done();
      });
    });

    afterEach(function (done) {
      call(
        "POST",
        "https://b00tc4mp.herokuapp.com/api/v2/users/auth",
        { "Content-type": "application/json" },
        '{ "username": "' + email + '", "password" : "' + password + '" }',
        function (status, response) {
          console.assert(status === 200, "should status be 200");

          var res = JSON.parse(response);

          var token = res.token;

          call(
            "GET",
            "https://b00tc4mp.herokuapp.com/api/v2/users",
            { Authorization: "Bearer " + token },
            "",
            function (status, response) {
              console.assert(status === 200, "should status be 200");

              var user = JSON.parse(response);

              console.assert(
                user.fullname === fullname,
                "should full name match"
              );
              console.assert(
                user.username === email,
                "should username match the e-mail"
              );

              call(
                "DELETE",
                "https://b00tc4mp.herokuapp.com/api/v2/users",
                {
                  Authorization: "Bearer " + token,
                  "Content-type": "application/json",
                },
                '{ "password": "' + password + '" }',
                function (status, response) {
                  console.assert(status === 204, "should status be 204");
                  console.assert(
                    response.length === 0,
                    "should response be empty"
                  );
                  done();
                }
              );
            }
          );
        }
      );
    });
  });
  //------------------------------------------------------------------------------------------
});
