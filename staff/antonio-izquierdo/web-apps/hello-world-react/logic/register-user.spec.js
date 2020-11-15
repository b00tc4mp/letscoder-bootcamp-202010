//const random = Math.random
const { random } = Math

describe('SPEC registerUser()', function () {
    describe('when user does not exist', function () {
        let fullname, email, password, token

        beforeEach(function (done) {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`

            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json'},
            JSON.stringify({ fullname, username: email, password}),
            function (status, response){
                expect(status).toBe(201)
                expect(response.length).tobe(0)
            })

            done()
        })
    })

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
    })
})

