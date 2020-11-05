describe('SPEC searchByIngredient()', function(){
    describe('When api brings results', function(){
        let name,fullname,email,password,repassword,token
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
                            name = ['Gin', 'Lemon_juice', 'vodka', 'wine', 'apple', 'rum', 'pineapple' ].random()
                            done()
                        })
                })
        })

        it('should succed on matching ingredient', function(done){
            searchByIngredient(token, name,function(error,results){
                expect(error).toBeNull()

                expect(results).toBeOfType("object")

                expect(results.length).toBeGreaterThan(0)

                results.forEach( ({ id, name, image }) => {
                    expect(id).toBeOfType('string')
                    expect(name).toBeOfType('string')//nombre
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
    describe('When api does not brings results', function(){
        let name,fullname,email,password,repassword,token
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
                            name = ['nfsdkn','dfmdkjsfm','nfjsdn', 'mfkdsmds', 'aksas', 'nasdjndfi' ].random()
                            done()
                        })
                })
        })

        it('should fail on non-matching ingredient', function(done){
            
            // try{
                searchByIngredient(token, name,function(error){
                    expect(error).toBeDefined()
    
                    expect(error.message).toBe("no ingredient found")})
            //     })

            // } catch (error) {
            //     expect(error).toBeDefined()
            // }
            done()
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