describe('SPEC authenticateUser()', function () {
  const { random } = Math;

  describe('when user already exists', function () {
    let fullname, email, password, token;

    beforeEach(function (done) {
      fullname = `fullname-${random()}`;
      email = `email-${random()}@authenticate.com`;
      password = `password-${random()}`;

      call(
        'POST',
        'https://b00tc4mp.herokuapp.com/api/v2/users',
        { 'Content-type': 'application/json' },
        JSON.stringify({ fullname, username: email, password }),
        function (status, response) {
          expect(status).toBe(201);
          expect(response.length).toBe(0);
          done();
        },
      );
    });

    it('should succeed on authenticate', function (done) {
      authenticateUser(email, password, function (error, token) {
        expect(error).toBeNull();
        expect(token.length).toBeGreaterThan(0);
        expect(token).toBeInstanceOf(String);
        done();
      });
    });

    afterEach(function () {
      call(
        'DELETE',
        'https://b00tc4mp.herokuapp.com/api/v2/users',
        {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        JSON.stringify({ password }),
        function (status, response) {
          expect(status).toBe(204);
          expect(response.length).toBe(0);
        },
      );
    });
  });
  //------------------------------------------------------------------------------------------
  describe('when user not exists', function () {
    let email, password;

    beforeEach(function () {
      email = 'johndoe-' + random() + '@authenticate.com';
      password = 'pass-' + random();
    });

    it('should fail on non-existing user', function (done) {
      authenticateUser(email, password, function (error, token) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe(`username and/or password wrong`);
        expect(token).toBe(undefined);
        done();
      });
    });
  });
  //------------------------------------------------------------------------------------------
  describe('when password was wrong', function () {
    let fullname, email, password, token;

    beforeEach(function (done) {
      fullname = `fullname-${random()}`;
      email = `email-${random()}@authenticate.com`;
      password = `password-${random()}`;

      call(
        'POST',
        'https://b00tc4mp.herokuapp.com/api/v2/users',
        { 'Content-type': 'application/json' },
        JSON.stringify({ fullname, username: email, password }),
        function (status, response) {
          expect(status).toBe(201);
          expect(response.length).toBe(0);
          done();
        },
      );
    });

    it('should fail on wrong password', function (done) {
      authenticateUser(email, 'password', function (error, token) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe(`username and/or password wrong`);
        expect(token).toBe(undefined);
        done();
      });
    });

    afterEach(function (done) {
      call(
        'POST',
        'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
        { 'Content-type': 'application/json' },
        JSON.stringify({ username: email, password }),
        function (status, response) {
          token = JSON.parse(response).token;
          expect(status).toBe(200);
          expect(response.length).toBeGreaterThan(0);
          expect(token.length).toBeGreaterThan(0);
          call(
            'DELETE',
            'https://b00tc4mp.herokuapp.com/api/v2/users',
            {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
            },
            JSON.stringify({ password }),
            function (status, response) {
              expect(status).toBe(204);
              expect(response.length).toBe(0);
              done();
            },
          );
        },
      );
    });
  });
  //------------------------------------------------------------------------------------------
  describe('when email was wrong', function () {
    let fullname, email, password, token;

    beforeEach(function (done) {
      fullname = `fullname-${random()}`;
      email = `email-${random()}@authenticate.com`;
      password = `password-${random()}`;

      call(
        'POST',
        'https://b00tc4mp.herokuapp.com/api/v2/users',
        { 'Content-type': 'application/json' },
        JSON.stringify({ fullname, username: email, password }),
        function (status, response) {
          expect(status).toBe(201);
          expect(response.length).toBe(0);
          done();
        },
      );
    });

    it('should fail on wrong e-mail', function (done) {
      authenticateUser('wrong-' + email, password, function (error, token) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe(`username and/or password wrong`);
        expect(token).toBe(undefined);
        done();
      });
    });

    afterEach(function (done) {
      call(
        'POST',
        'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
        { 'Content-type': 'application/json' },
        JSON.stringify({ username: email, password }),
        function (status, response) {
          token = JSON.parse(response).token;
          expect(status).toBe(200);
          expect(response.length).toBeGreaterThan(0);
          expect(token.length).toBeGreaterThan(0);
          call(
            'DELETE',
            'https://b00tc4mp.herokuapp.com/api/v2/users',
            {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
            },
            JSON.stringify({ password }),
            function (status, response) {
              expect(status).toBe(204);
              expect(response.length).toBe(0);
              done();
            },
          );
        },
      );
    });
  });
  //------------------------------------------------------------------------------------------
  describe('when email not string', function () {
    let email, password;

    beforeEach(function () {
      email = [1, true, null, undefined, {}, [], function () {}, new Date()].random();
      password = 'pass-' + random();
    });

    it('should fail on non-string email', function () {
      expect(function () {
        authenticateUser(email, password, function () {});
      }).toThrowError(TypeError, `${email} is not an e-mail`);
    });
  });
  //------------------------------------------------------------------------------------------
  describe('when email is empty', function () {
    let email, password;

    beforeEach(function () {
      email = ['', ' ', '\t', '\n'].random();
      password = 'pass-' + random();
    });

    it('should fail on empty or blank email', function () {
      expect(function () {
        authenticateUser(email, password, function () {});
      }).toThrowError(Error, `${email} is empty or blank`);
    });
  });
  //------------------------------------------------------------------------------------------
  describe('when email is invalid', function () {
    let email, password;

    beforeEach(function () {
      email = ['john-doe#mail.com', '@mail.com', 'johh-doe@mail', 'john-doe@'].random();
      password = 'pass-' + random();
    });

    it(' should fail invalid email', function () {
      expect(function () {
        authenticateUser(email, password, function () {});
      }).toThrowError(Error, `invalid e-mail`);
    });
  });
  //------------------------------------------------------------------------------------------
  describe('when password is non-string', function () {
    let email, password;

    beforeEach(function () {
      email = 'johndoe-' + Math.random() + '@authenticate.com';
      password = [1, true, null, undefined, {}, [], function () {}, new Date()].random();
    });

    it(' should fail on non-string password', function () {
      expect(function () {
        authenticateUser(email, password, function () {});
      }).toThrowError(TypeError, `${password} is not a password`);
    });
  });
  //------------------------------------------------------------------------------------------
  describe('when password is empty', function () {
    let email, password;

    beforeEach(function () {
      email = 'johndoe-' + Math.random() + '@authenticate.com';
      password = ['', ' ', '\t', '\n'].random();
    });

    it(' should fail on empty or blank password', function () {
      expect(function () {
        authenticateUser(email, password, function () {});
      }).toThrowError(Error, `${password} is empty or blank`);
    });
  });
  //------------------------------------------------------------------------------------------
  describe('when callback is not a function', function () {
    let email, password;

    beforeEach(function () {
      email = 'johndoe-' + Math.random() + '@authenticate.com';
      password = 'pass-' + Math.random();
      callback = [1, true, null, undefined, {}, [], 'string', new Date()].random();
    });

    it(' should fail on non-function callback', function () {
      expect(function () {
        authenticateUser(email, password, callback);
      }).toThrowError(TypeError, `${callback} is not a callback`);
    });
  });
  //------------------------------------------------------------------------------------------
});
