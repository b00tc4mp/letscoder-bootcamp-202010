describe('SPEC searchVehicles()', () => {
    describe('when query gives results', () => {
        let fullname, email, password, token, query

        beforeEach(done => {
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

                            query = ['red', 'blue', 'green', 'pink', 'black'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should succeed on matching query', function (done) {
            searchVehicles(token, query, function (error, vehicles) {
                expect(error).toBeNull()

                expect(vehicles).toBeDefined()
                expect(vehicles).toBeInstanceOf(Array)
                expect(vehicles.length).toBeGreaterThan(0)

                vehicles.forEach(vehicle => {
                    const { id, name, thumbnail, price, like } = vehicle

                    expect(id).toBeOfType('string')
                    expect(name).toBeOfType('string')
                    expect(thumbnail).toBeOfType('string')
                    expect(price).toBeOfType('number')
                    expect(like).toBeFalse()
                })

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

    describe('when query gives no results', () => {
        let fullname, email, password, token, query

        beforeEach(done => {
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

                            query = ['asdfasd', 'asdfasdf', 'ljklajsdf', 'añsdflkj'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should succeed providing no results (empty array) on non-matching query', function (done) {
            searchVehicles(token, query, function (error, vehicles) {
                expect(error).toBeNull()

                expect(vehicles).toBeDefined()
                expect(vehicles).toBeInstanceOf(Array)
                expect(vehicles.length).toBe(0)

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
})