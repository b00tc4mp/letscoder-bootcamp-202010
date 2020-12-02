// const random = Math.random
const { random } = Math

describe('SPEC authenticateUser()', function () {

    // case 1
    describe('when user registered previously', function () {
        let fullname, email, password, token
        // Preparing the test scenario
        beforeEach(function (done) {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`


            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users', //register first
                { 'Content-type': 'application/json' },
                JSON.stringify({ fullname, username: email, password }), //converts to JSON string
                function (status, response) {
                    expect(status).toBe(201) //console.assert
                    expect(response.length).toBe(0) //console.assert

                done();

                })
            })

        // happy outcome
        it('should succeed on authenticate', function (done) {
            aunthenticateUser(email, password, function (error, token) {
                expect(error).toBeNull();

                expect(token).toBeInstanceOf(String);
                token = JSON.parse(response).token;
                expect(token.length).toBeGreaterThan(0)

                done();
            })
        })

        it('should fail on wrong password', function(done) {
            aunthenticateUser(email, password + '-wrong', function (error, token) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toBe('username and/or password wrong');

                expect(token).toBe(undefined);

                done();
            })

        })

        it('should fail on wrong email', function(done) {
            aunthenticateUser('wrong-' + email, password, function (error, token) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toBe('username and/or password wrong');

                expect(token).toBe(undefined);

                done();
            })

        })

        // Closing test scenario deleting created user
        afterEach(function () {
            call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json'
                },
                JSON.stringify({ password }),
                function (status, response) {
                    expect(status).toBe(204)
                    expect(response.length).toBe(0)
                })
        })
    })
    // case 2
    describe('when the user did not register previously', function () {
        let fullname, email, password, token

        beforeEach(function (done) {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`

            done();

        it ('should fail on non-existing user', function (done) {
            aunthenticateUser(email, password, function (error, token) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toBe('username and/or password wrong');

                expect(token).toBe(undefined);
                done();
            })
        })

        })
                                
        })


    })




