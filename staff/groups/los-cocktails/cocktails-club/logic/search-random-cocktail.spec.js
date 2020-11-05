describe('SPEC searchRandomCocktail()', function(){
    describe('When api brings results', function(){
        let token, fullname, email, password, repassword
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
                            done()
                        })
                })
        })

        it('should succed on random cocktail', function(done){
            searchRandomCocktail(token, function(error,results){
                expect(error).toBeNull()

                expect(results).toBeOfType('object')

                expect(results.length).toBeGreaterThan(0)
                
                results.forEach( ({ id, glass, name, instructions, alcoholic, image }) => {
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

})