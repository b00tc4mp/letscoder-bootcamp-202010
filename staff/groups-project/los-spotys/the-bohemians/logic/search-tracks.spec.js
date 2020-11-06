

describe('SPEC SearchTracks()', function () {
    describe('when query and type gives results', () => {

        let fullname, email, password, token, spotyToken, type, query


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

                            type = 'track'

                            spotyToken = "BQBNkKs-4eqx3ecmL4xWm3C5JFxd5i2a_7pyH56Q07pnprqkQnBh1q4kXOR9UfHwquBusZOupg2eREqvlu0orj1BnVx2QlkSD6H7PqczImImWnDyk21bNnWTDFFkvERHY4wHQ5BE7U_2IyRGw7vXHky4wAgmo_c"

                            query = ['jackson', 'hendrix', 'queen', 'stones', 'redding'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should succed on matching type and query', done => {
            searchTracks(token, spotyToken, type, query, function (error, tracks) {
                expect(error).toBeNull()

                expect(tracks).toBeDefined()
                expect(tracks).toBeInstanceOf(Array)
                expect(tracks.length).toBeGreaterThan(0)

                tracks.forEach(track => {
                    const { song, id, preListening, artist, image, releaseDate, favourite } = track


                    expect(song).toBeOfType('string')
                    expect(id).toBeOfType('string')
                    preListening && expect(preListening).toBeOfType('string')
                    expect(artist).toBeOfType('string')
                    expect(image).toBeOfType('string')
                    expect(releaseDate).toBeOfType('string')
                    expect(favourite).toBeFalse()
                })

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

    describe('when query gives no results', () => {
        let fullname, email, password, token, spotyToken, type, query


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

                            type = 'track'

                            spotyToken = "BQBNkKs-4eqx3ecmL4xWm3C5JFxd5i2a_7pyH56Q07pnprqkQnBh1q4kXOR9UfHwquBusZOupg2eREqvlu0orj1BnVx2QlkSD6H7PqczImImWnDyk21bNnWTDFFkvERHY4wHQ5BE7U_2IyRGw7vXHky4wAgmo_c"

                            query = ['opiuoipuoipu', 'poioiuopiu', 'hgvhjhb', 'iybhuihbyib', 'qwfdqdcqwdc'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should succed providing no results (empty array) on non-matching query', done => {
            searchTracks(token, spotyToken, type, query, function (error, tracks) {
                expect(error).toBe(error)
                console.log(tracks)
                expect(tracks).toBeDefined()
                expect(tracks).toBeInstanceOf(Array)
                expect(tracks.length).toBe(0)
                
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

    describe('when its the wrong type', () => {
        let fullname, email, password, token, spotyToken, type, query


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

                            type = ['opiuoipuoipu', 'poioiuopiu', 'hgvhjhb', 'iybhuihbyib', 'qwfdqdcqwdc'].random()

                            spotyToken = "BQBNMmKPks5yZ98oyhDZCXNoMIrRZohru61R-nwNOLhpT5wugY20seW7j2g5i652skBkuuF9ufCIwE-pMgGyasW3nI0pLNOAc8_QgMOj3T_foLwkVoTTv-v8IagGlybNztqAIshoDuGmU_5uMn7w1F7sHyvUWCs"

                            query = ['jackson', 'hendrix', 'queen', 'stones', 'redding'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should succed providing no results (empty array) on wrong type', done => {
            searchTracks(token, spotyToken, type, query, function (error, tracks) {
                expect(error).toBe(error)

                expect(tracks).toBe(undefined)

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



    describe('when token is not a string', function () {
        let token

        beforeEach(function () {
            token = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        })

        it('should fail on non-string token', function () {
            expect(function () {
                searchTracks(token, function () { })
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
                searchTracks(token, function () { })
            }).toThrowError(Error, 'token is empty or blank')
        })
    })


    describe('when spotyToken is not a string', () => {
        let fullname, email, password, token, spotyToken, type, query


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

                            type = 'track'

                            spotyToken = [1, true, null, undefined, {}, [], function () { }, new Date].random()

                            query = ['jackson', 'hendrix', 'queen', 'stones', 'redding'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should fail on non-string spotyToken', done => {
            expect(function () {
                searchTracks(token, spotyToken, type, query, function () { })
            }).toThrowError(TypeError, `${spotyToken} is not a spotyToken`)
            done()
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


    describe('when spotyToken is empty or blank', () => {
        let fullname, email, password, token, spotyToken, type, query


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

                            type = 'track'

                            spotyToken = ['', ' ', '\t', '\n'].random()

                            query = ['jackson', 'hendrix', 'queen', 'stones', 'redding'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should fail on empty or blank spotyToken', done => {
            expect(function () {
                searchTracks(token, spotyToken, type, query, function () { })
            }).toThrowError(Error, `spotyToken is empty or blank`)
            done()
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

    describe('when query is not a string', () => {
        let fullname, email, password, token, spotyToken, type, query


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

                            type = 'track'

                            spotyToken = "BQCZSHnIRYaeXDqkGek9MgIthexfL2fRGUgwd2L5d0nlgaj_UuSF4mQUV025ubI8slvytdIFGutzh3UZ6UQ8LGS0RQh9jN6itR_dpR6I4pNNi8wmyUimKzzfa59TFlD3Gj7vN8umjq9so9Yinm4UAQ67H2rwDHU"

                            query = [1, true, null, undefined, {}, [], function () { }, new Date].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should fail on non-string query', done => {
            expect(function () {
                searchTracks(token, spotyToken, type, query, function () { })
            }).toThrowError(TypeError, `${query} is not a query`)
            done()
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

    describe('when query is empty or blank', () => {
        let fullname, email, password, token, spotyToken, type, query


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

                            type = 'track'

                            spotyToken = "BQCZSHnIRYaeXDqkGek9MgIthexfL2fRGUgwd2L5d0nlgaj_UuSF4mQUV025ubI8slvytdIFGutzh3UZ6UQ8LGS0RQh9jN6itR_dpR6I4pNNi8wmyUimKzzfa59TFlD3Gj7vN8umjq9so9Yinm4UAQ67H2rwDHU"

                            query = ['', ' ', '\t', '\n'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should fail on empty or blank query', done => {
            expect(function () {
                searchTracks(token, spotyToken, type, query, function () { })
            }).toThrowError(Error, `query is empty or blank`)
            done()
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

    describe('when type is not a string', () => {
        let fullname, email, password, token, spotyToken, type, query


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

                            type = [1, true, null, undefined, {}, [], function () { }, new Date].random()

                            spotyToken = "BQCZSHnIRYaeXDqkGek9MgIthexfL2fRGUgwd2L5d0nlgaj_UuSF4mQUV025ubI8slvytdIFGutzh3UZ6UQ8LGS0RQh9jN6itR_dpR6I4pNNi8wmyUimKzzfa59TFlD3Gj7vN8umjq9so9Yinm4UAQ67H2rwDHU"

                            query = ['jackson', 'hendrix', 'queen', 'stones', 'redding'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should fail on non-string type', done => {
            expect(function () {
                searchTracks(token, spotyToken, type, query, function () { })
            }).toThrowError(TypeError, `${type} is not a type`)
            done()
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

    describe('when type is empty or blank', () => {
        let fullname, email, password, token, spotyToken, type, query


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

                            type = ['', ' ', '\t', '\n'].random()

                            spotyToken = "BQCZSHnIRYaeXDqkGek9MgIthexfL2fRGUgwd2L5d0nlgaj_UuSF4mQUV025ubI8slvytdIFGutzh3UZ6UQ8LGS0RQh9jN6itR_dpR6I4pNNi8wmyUimKzzfa59TFlD3Gj7vN8umjq9so9Yinm4UAQ67H2rwDHU"

                            query = ['jackson', 'hendrix', 'queen', 'stones', 'redding'].random()

                            done()
                        }
                    )
                }
            )
        })

        it('should fail on empty or blank type', done => {
            expect(function () {
                searchTracks(token, spotyToken, type, query, function () { })
            }).toThrowError(Error, `type is empty or blank`)
            done()
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


