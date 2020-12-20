
describe('SPEC modifyUser()', function () {
    describe('when user already exists', function () {
        let fullname, email, password, token, changes

        beforeEach(function (done) {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            changes = {"city": "Barcelona"}

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

                            done()
                        }
                    )
                }
            )
        })

        it('should succeed on right token', function (done) {
            modifyUser(token, changes, function (error) {
                expect(error).toBeNull()


                expect(true).toBeTrue()

                done()
            })
        })

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


    describe('when token is not a string', function () {
        let token

        beforeEach(function () {
            token = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        })

        it('should fail on non-string token', function () {
            expect(function () {
                modifyUser(token, function () { })
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
                modifyUser(token, function () { })
            }).toThrowError(Error, 'token is empty or blank')
        })
    })

    describe('when changes is not an object', function () {
        let fullname, email, password, token, changes

        beforeEach(function (done) {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            changes = [1, true, null, undefined, [], function () { }, new Date].random()

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

                        done()
                    }
                )
            })
        })

        it('should fail on non-object changes', function () {
            expect(function () {
                modifyUser(token, changes, function () { })
            }).toThrowError(Error, `${changes} is not a object`)
        })
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
}) 