describe('SPEC retrieveVehicle()', () => {
    describe('when the vehicle ids exist', () => {
        let fullname, email, password, token, vehicleId

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

                            vehicleId = ['FYG51', 'FYB61', 'FYF94', 'FYC12', 'FJV51'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should succeed on matching id', done => {
            retrieveVehicle(token, vehicleId, (error, vehicle) => {
                expect(error).toBeNull()

                expect(vehicle).toBeDefined()

                const { id, name, image, year, description, price, url, like } = vehicle

                expect(id).toBe(vehicleId)
                expect(name).toBeOfType('string')
                expect(image).toBeOfType('string')
                expect(year).toBeOfType('number')
                expect(description).toBeOfType('string')
                expect(price).toBeOfType('number')
                expect(url).toBeOfType('string')
                expect(like).toBeFalse()

                done()
            })
        })

        afterEach(done => {
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
        })
    })

    describe('when the vehicle ids do not exist', () => {
        let fullname, email, password, token, vehicleId

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

                            vehicleId = ['FABC', 'FXYZ', 'FJKL'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should succeed resulting in null on non-matching id', done => {
            retrieveVehicle(token, vehicleId, (error, vehicle) => {
                expect(error).toBeNull()

                expect(vehicle).toBeNull()

                done()
            })
        })

        afterEach(done => {
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
        })
    })
})