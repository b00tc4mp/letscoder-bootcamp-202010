const { random } = Math

describe('SPEC retrieveTracks()', () => {
    describe('when the track id exist', () => {
        let fullname, email, password, token, spotyToken, id

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

                            id = ["5fcxVCOtfesNzI2n4Y4kiJ", "4u7EnebtmKWzUH433cf5Qv", "5T8EDUDqKcs6OSOwEsfqG7", "5vdp5UmvTsnMEMESIF2Ym7", "1HKl3RJInVzf5ObVnM644j", "2fuCquhmrzHpu5xcA1ci9x", "4pbJqGIASGPr0ZpGpnWkDn"].random()
                            spotyToken = "BQCpP-LaSkWpP0mWHyuINBBDnIHfhyzVdnV_1SHJ3eLm-x5zVcP7uVodRVa5dIkZcjHkGRap4-wdgWJAlMOvjGBcIui4oh0El-XO_zjQC6N3rB0Y06-VU497Nwg7TvU9CDSdR-Y2Pa0L-OIwq4pJAfZo8yrEDuc"

                            done()
                        })

                })

        })

        it('should succeed on matching id', done => {
            retrieveTrack(token, spotyToken, id, (error, track) => {
                expect(error).toBeNull()

                expect(track).toBeDefined()

                const { id, song, preListening, album, artist, favourite } = track

                expect(id).toBeOfType('string')
                expect(song).toBeOfType('string')
                //expect(preListening).toBeOfType('string')
                expect(album).toBeOfType('string')
                expect(artist).toBeOfType('string')
                expect(favourite).toBeFalse()


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

    describe('when the track id do not exist', () => {
        let fullname, email, password, token, spotyToken, id

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

                            id = ["AB", "CD", "EF", "GH", "IJ", "KL"].random()
                            spotyToken = "BQCsAa3odHv0de71QkKc8Zjh0JrxFMRvr8MCUdzZc-syVh20YjoIZCmL9eDCPhm0XyoShuAagwC6aqcT4bq6ciIfIrjudP7li4ZbbOH47AKxU49_zT1NhTeCp16UBEAbtoTFcT6Bjk7dKHh6j4ihhq4A7x5oAF4"

                            done()
                        })

                })

        })


        it('should succeed when on non matching id', done => {
            retrieveTrack(token, spotyToken, id, (error, track) => {

                expect(error).toBe(error)

                expect(track).toBe(undefined)

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
                retrieveTrack(token, function () { })
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
                retrieveTrack(token, function () { })
            }).toThrowError(Error, 'token is empty or blank')
        })
    })

    describe('when spotytoken is not a string', () => {
        let fullname, email, password, token, spotyToken, id

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

                            id = ["5fcxVCOtfesNzI2n4Y4kiJ", "4u7EnebtmKWzUH433cf5Qv", "5T8EDUDqKcs6OSOwEsfqG7", "5vdp5UmvTsnMEMESIF2Ym7", "1HKl3RJInVzf5ObVnM644j", "2fuCquhmrzHpu5xcA1ci9x", "4pbJqGIASGPr0ZpGpnWkDn"].random()
                            spotyToken = [1, true, null, undefined, {}, [], function () { }, new Date].random()

                            done()
                        })

                })

        })     

        it('should fail on non-string spotyToken', done => {
            expect(function () {
                retrieveTrack(token, spotyToken, id, function () { })
            }).toThrowError(Error, `${spotyToken} is not a spotyToken`)
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
    describe('when spotytoken empty or blank', () => {
        let fullname, email, password, token, spotyToken, id

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

                            id = ["5fcxVCOtfesNzI2n4Y4kiJ", "4u7EnebtmKWzUH433cf5Qv", "5T8EDUDqKcs6OSOwEsfqG7", "5vdp5UmvTsnMEMESIF2Ym7", "1HKl3RJInVzf5ObVnM644j", "2fuCquhmrzHpu5xcA1ci9x", "4pbJqGIASGPr0ZpGpnWkDn"].random()
                            spotyToken = ['', ' ', '\t', '\n'].random()

                            done()
                        })

                })

        })     

        it('should fail on an empty or blank spotyToken', done => {
            expect(function () {
                retrieveTrack(token, spotyToken, id, function () { })
            }).toThrowError(Error, 'spotyToken is empty or blank')
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
   

    describe('when id is not a string', () => {
        let fullname, email, password, token, spotyToken, id

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

                            id = [1, true, null, undefined, {}, [], function () { }, new Date].random()
                            spotyToken = "BQCsAa3odHv0de71QkKc8Zjh0JrxFMRvr8MCUdzZc-syVh20YjoIZCmL9eDCPhm0XyoShuAagwC6aqcT4bq6ciIfIrjudP7li4ZbbOH47AKxU49_zT1NhTeCp16UBEAbtoTFcT6Bjk7dKHh6j4ihhq4A7x5oAF4"

                            done()
                        })

                })

        })     

        it('should fail on non-string id', done => {
            expect(function () {
                retrieveTrack(token, spotyToken, id, function () { })
            }).toThrowError(TypeError, `${id} is not an id`)
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
    describe('when id is empty or blank', () => {
        let fullname, email, password, token, spotyToken, id

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

                            id = ['', ' ', '\t', '\n'].random()
                            spotyToken = "BQCsAa3odHv0de71QkKc8Zjh0JrxFMRvr8MCUdzZc-syVh20YjoIZCmL9eDCPhm0XyoShuAagwC6aqcT4bq6ciIfIrjudP7li4ZbbOH47AKxU49_zT1NhTeCp16UBEAbtoTFcT6Bjk7dKHh6j4ihhq4A7x5oAF4"

                            done()
                        })

                })

        })     

        it('should fail on an empty or blank id', done => {
            expect(function () {
                retrieveTrack(token, spotyToken, id, function () { })
            }).toThrowError(Error, 'id is empty or blank')
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


