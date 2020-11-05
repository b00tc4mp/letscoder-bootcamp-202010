const { random } = Math

describe('SPEC toggleFavouriteTrack()', function(){
    describe('when toggle succeed', function(){
        let fullname, email, password, token, id
        
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

                            id = ["5fcxVCOtfesNzI2n4Y4kiJ", "4u7EnebtmKWzUH433cf5Qv", "5T8EDUDqKcs6OSOwEsfqG7", "5vdp5UmvTsnMEMESIF2Ym7", "1HKl3RJInVzf5ObVnM644j", "2fuCquhmrzHpu5xcA1ci9x", "4pbJqGIASGPr0ZpGpnWkDn"].random()


                            done()
                        }
                    )
                }
            )
        })

        it ('should succeed on adding favourite', done => {
            toggleFavouriteTrack(token, id, function(error){
                expect(error).toBeNull()

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
                toggleFavouriteTrack(token, function () { })
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
                toggleFavouriteTrack(token, function () { })
            }).toThrowError(Error, 'token is empty or blank')
        })
    })

    describe('when id is not an string', function(){
        let fullname, email, password, token, id
        
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

                            id = [1, true, null, undefined, {}, [], function () { }, new Date].random()


                            done()
                        }
                    )
                }
            )
        })

        it ('should fail on a non string id', done => {
            expect (function(){
                
                toggleFavouriteTrack(token, id, function(){})
            }).toThrowError(TypeError, `${id} is not an id`)
                

                done()
            
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

    describe('when id is empty or blank', function(){
        let fullname, email, password, token, id
        
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

                            id = ['', ' ', '\t', '\n'].random()


                            done()
                        }
                    )
                }
            )
        })

        it ('should fail on an empty or blank id', done => {
            expect (function(){
                
                toggleFavouriteTrack(token, id, function(){})
            }).toThrowError(Error, `id is empty or blank`)
                

                done()
            
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