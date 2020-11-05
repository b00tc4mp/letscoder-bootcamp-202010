describe('SPEC searchByName()', function () {
    describe('When api brings results', function () {
        let name, token, fullname, email, password, repassword

        beforeEach(function (done) {
            fullname = `fullname-${random()}@mail.com`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password

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
                            name = ['margarita', 'caipirinha', 'cosmopolitan', 'pisco_sour', 'Mojito', 'Gin_And_Tonic'].random()
                            done()
                        })
                })
        })


        it('should succed on matching cocktail/ coctails', function (done) {
            searchByName(token, name, function (error, results) {
                expect(error).toBeNull()

                expect(results).toBeOfType("object")

                expect(results.length).toBeGreaterThan(0)

                results.forEach(({ id, name, glass, instructions, alcoholic, image }) => {
                    expect(id).toBeOfType('string')
                    expect(name).toBeOfType('string')//nombre
                    expect(glass).toBeOfType('string')
                    expect(instructions).toBeOfType('string')
                    expect(alcoholic).toBeOfType('string')
                    expect(image).toBeOfType('string')
                })

                done()

            })
        })
        afterEach(function (done) {
            call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json'
                },
                JSON.stringify({ username: email, password }),
                function (status, response) {
                    expect(status).toBe(204)
                    expect(response.length).toBe(0)
                    done()
                }
            )
        })
    })
    describe('When api does not brings results', function () {
        let name, fullname, email, password, repassword, token
        beforeEach(function (done) {
            fullname = `fullname-${random()}@mail.com`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password

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
                            name = ['nfsdkn', 'dfmdkjsfm', 'nfjsdn', 'mfkdsmds', 'aksas', 'nasdjndfi'].random()
                            done()
                        })
                })
        })
        it('should fail on non-matching cocktail/ coctails', function (done) {
            searchByName(token, name, function (error, results) {
                expect(error).toBeDefined()
                expect(results).toBeNull()
                done()
            })
        })
        afterEach(function (done) {
            call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json'
                },
                JSON.stringify({ username: email, password }),
                function (status, response) {
                    expect(status).toBe(204)
                    expect(response.length).toBe(0)
                    done()
                }
            )
        })
    })

})