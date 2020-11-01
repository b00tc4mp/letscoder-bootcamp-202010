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

    it("should succeed on new register", function (done) {
      registerUser(fullname, email, password, repassword, function (error) {
        expect(error).toBeNull();
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

  describe("when user already exists", function () {
    let fullname, email, password, repassword;

    beforeEach(function (done) { 
     fullname = 'John Doe ' + random()
     email = 'johndoe-' + random() + '@mail.com'
     password = 'pass-' + random()
     repassword = password
     call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
     { 'Content-type': 'application/json' },
     '{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '" }',
     function (status, response) {
         expect(status).toBe(201)
         expect(response.length).toBe(0)
         done()
      }) 
    });
     
    it("should fail on already existing user", function (done) {
      registerUser(fullname, email, password, repassword, function (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe(`user with username "${email}" already exists`) 
        
        done()
      })

    });
   
    afterEach(function (done) 
    {call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth', { 'Content-type': 'application/json' },
    '{ "username": "' + email + '", "password" : "' + password + '" }',
    function (status, response) {
        expect(status).toBe(200)
        
        var res = JSON.parse(response)
        
        var token = res.token
        console.log(token)

        call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            {
                'Authorization': 'Bearer ' + token,
                'Content-type': 'application/json'
            },
            '{ "password": "' + password + '" }',
            function (status, response) {
                expect(status).toBe(204)
                expect(response.length).toBe(0)
                done()
            }
        )
    }
)});


    

  });
  //----------------------------------------------------------------------------------------------
  describe("when fullname is not a string" , function () {
    let fullname, email, password;

    beforeEach(function () {
          fullname = [1, true, null, undefined, {}, [], function () { }, new Date].random()
          email = 'johndoe-' + random() + '@mail.com'
          password = 'pass-' + random()
          repassword = password
    });

    it("should fail on non string fullname", function () {
         expect(function () {
         registerUser(fullname, email, password, repassword, function () {});
      }).toThrowError(TypeError, `${fullname} is not a full name`);
    });

  });

  //-----------------------------------------------------------------------------------------------
  describe("when fullname is empty or blank", function () {
    let fullname, email, password, repassword ;

    beforeEach(function () {
        fullname = ['', ' ', '\t', '\n'].random()
        email = 'johndoe-' + random() + '@mail.com'
        password = 'pass-' + random()
        repassword = password

    });

    it("should be error on empty or blank fullname", function () 
     {
      expect(function () {
        registerUser(fullname, email, password, repassword, function () {});
      }).toThrowError(Error, `full name is empty or blank`);
    });

    afterEach(function () {});
  });

  //------------------------------------------------------------------------------------------------
  describe("when e-mail is not a string", function () {
    let fullname, email, password, repassword;

    beforeEach(function () 
    {
         fullname = 'John Doe ' + random()
         email = [1, true, null, undefined, {}, [], function () { }, new Date].random()
         password = 'pass-' + random()
         repassword = password
    });

    it("should be error on non string e-mail", function () {
        expect(function () {
        registerUser(fullname, email, password, repassword, function () {});
      }).toThrowError(TypeError, `${email} is not an e-mail`);
    });

   
  });
  //-------------------------------------------------------------------------------------------------

  describe("when e-mail is empty or blank ", function () {
    let fullname, email, password, repassword;

    beforeEach(function () { 
    fullname = 'John Doe ' + random()
     email = ['', ' ', '\t', '\n'].random()
     password = 'pass-' + random()
     repassword = password

  });

    it("should fail on empty or blank e-mail", function () {
         expect(function () {
        registerUser(fullname, email, password, repassword, function () {});
      }).toThrowError(Error, `e-mail is empty or blank`);
    });

  });

   //--------------------------------------------------------------------------------------------------
  

   describe("when e-mail is invalid", function () {
    let fullname, email, password, repassword;

    beforeEach(function () {
       fullname = 'John Doe ' + Math.random()
       email = ['john-doe#mail.com', '@mail.com', 'johh-doe@mail', 'john-doe@'].random()
       password = 'pass-' + Math.random()
       repassword = password
    });

    it("should fail in ivalid e-mail", function () {
        expect(function () {
        registerUser(fullname, email, password, repassword, function () {});
      }).toThrowError(Error, `invalid e-mail`);

    });


  });
  //-----------------------------------------------------------------------------------------------------
  describe("when password is not a string", function () {
    let fullname, email, password, repassword;

    beforeEach(function () {
        fullname = 'John Doe ' + random()
         email = 'johndoe-' + random() + '@mail.com'
         password = [1, true, null, undefined, {}, [], function () { }, new Date].random()
         repassword = 'pass-' + random()
      
    });

    it("should fail on non string password", function () {
        expect(function () {
        registerUser(fullname, email, password, repassword, function () {});
      }).toThrowError(TypeError, `${password} is not a password`);

    });


  });
  //------------------------------------------------------------------------------------------------------
  describe("when password is empty or blank", function () {
    let fullname, email, password, repassword;

    beforeEach(function () {
      fullname = 'John Doe ' + random()
      email = 'johndoe-' + random() + '@mail.com'
      password = ['', ' ', '\t', '\n'].random()
      repassword = 'pass-' + random()
      
    });

    it("should fail on empty or blank password", function () {
        expect(function () {
        registerUser(fullname, email, password, repassword, function () {});
      }).toThrowError(Error, `password is empty or blank`);

    });


  });
  //------------------------------------------------------------------------------------------------------
  describe("when repassword is non a string", function () {
    let fullname, email, password, repassword;

    beforeEach(function () {
      fullname = 'John Doe ' + random()
      email = 'johndoe-' + random() + '@mail.com'
      password = 'pass-' + random()
      repassword = [1, true, null, undefined, {}, [], function () { }, new Date].random()
      
    });

    it("should fail on repassword is not a string", function () {
        expect(function () {
        registerUser(fullname, email, password, repassword, function () {});
      }).toThrowError(TypeError, `${repassword} is not a password repeat`);

    });


  });
  //-------------------------------------------------------------------------------------------------------
  describe("when repassword is empty or blank", function () {
    let fullname, email, password, repassword;

    beforeEach(function () {
       fullname = 'John Doe ' + random()
       email = 'johndoe-' + random() + '@mail.com'
       password = 'pass-' + random()
       repassword = ['', ' ', '\t', '\n'].random()
      
    });

    it("should fail on repassword is empty or blank", function () {
        expect(function () {
        registerUser(fullname, email, password, repassword, function () {});
      }).toThrowError(Error, `password repeat is empty or blank`);

    });


  });

  //-------------------------------------------------------------------------------------------------------
  describe("when mot matching password with repassword", function () {
    let fullname, email, password, repassword;

    beforeEach(function () {
       fullname = 'John Doe ' + random()
       email = 'johndoe-' + random() + '@mail.com'
       password = 'pass-' + random()
       repassword = password + '...'
    });

    it("should fail on not matching passwords", function () {
        expect(function () {
        registerUser(fullname, email, password, repassword, function () {});
      }).toThrowError(Error, `passwords don't match`);

    });


  });
  //--------------------------------------------------------------------------------------------------------

  describe("when callback is not a function", function () {
    let fullname, email, password, repassword, callback;

    beforeEach(function () {
         fullname = 'John Doe ' + random()
         email = 'johndoe-' + random() + '@mail.com'
         password = 'pass-' + random()
         repassword = password
         callback = [1, true, null, undefined, {}, [], 'string', new Date].random()
    });

    it("should fail on not function callback", function () {
        expect(function () {
        registerUser(fullname, email, password, repassword, callback);
      }).toThrowError(TypeError, `${callback} is not a callback`);

    });


  });
});


