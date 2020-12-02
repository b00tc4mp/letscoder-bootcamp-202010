// const random = Math.random
const { random } = Math

describe('SPEC retrieveUser()', function () {

    // happy outcome
    describe('when user already exists', function () {
        let fullname, email, password, token

        // Preparing the test scenario
        beforeEach(function (done) {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`

            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users', //register first
                { 'Content-type': 'application/json' },
                JSON.stringify({ fullname, username: email, password }), //converts to JSON
                function (status, response) {
                    expect(status).toBe(201) //console.assert
                    expect(response.length).toBe(0) //console.assert

                    call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth', //auth to get the token
                        { 'Content-type': 'application/json' },
                        JSON.stringify({ username: email, password }),
                        function (status, response) {
                            expect(status).toBe(200)

                            // token response
                            expect(response.length).toBeGreaterThan(0)
                            token = JSON.parse(response).token // parse converts from JSON into a object
                            expect(token.length).toBeGreaterThan(0)

                            done();
                        })
                })
        })

        // happy outcome
        it('should succeed on right token', function (done) {
            retrieveUser(token, function (error, user) {
                expect(error).toBeNull()

                expect(user).toBeInstanceOf(Object)
                expect(user.fullname).toBe(fullname)
                expect(user.username).toBe(email)

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
                }
            )
        })
    })
    // case 2
    describe('when user does not exist (but existed before)', function () {
        let fullname, email, password, token

        beforeEach(function (done) {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`

            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                { 'Content-type': 'application/json' },
                JSON.stringify({ fullname, username: email, password }),
                function (status, response) {
                    expect(status).toBe(201)
                    expect(response.length).toBe(0)

                    call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                        { 'Content-type': 'application/json' },
                        JSON.stringify({ username: email, password }),
                        function (status, response) {
                            expect(status).toBe(200)
                            expect(response.length).toBeGreaterThan(0)

                            token = JSON.parse(response).token

                            expect(token.length).toBeGreaterThan(0)

                            call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                                {
                                    Authorization: `Bearer ${token}`,
                                    'Content-type': 'application/json'
                                },
                                JSON.stringify({ password }),
                                function (status, response) {
                                    expect(status).toBe(204)
                                    expect(response.length).toBe(0)

                                    done()
                                }
                            )
                        }
                    )
                }
            )
        })

        it('should fail on right token', function (done) {
            retrieveUser(token, function (error, user) {
                expect(error).toBeInstanceOf(Error)

                var [, payload] = token.split('.') 
                var json = atob(payload)
                var obj = JSON.parse(json)
                var { sub: id } = obj

                expect(error.message).toBe(`user with id "${id}" does not exist`)

                done()
            })
        })
    })

    describe('when token is not a string', function () {
        let token

        beforeEach(function () {
            token = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        })

        it('should fail on non-string token', function () {
            expect(function () {
                retrieveUser(token, function () { })
            }).toThrowError(TypeError, `${token} is not a token`)
        })
    })

    describe('when token is empty or blank', function () {
        let token

        beforeEach(function () {
            token = ['', ' ', '\t', '\n'].random()
        })

        it('should fail on empty or blank token', function () {
            expect(function () {
                retrieveUser(token, function () { })
            }).toThrowError(Error, 'token is empty or blank')
        })
    })
})