

describe('SPEC unregisterUser()', function () {
    describe('when user already exists', function () {
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

                            done()
                        }) 
                })
        })

        it('should succeed when user already exist', function (done) {
          
            unregisterUser(password, token, function (error) {
                expect(error).toBeNull()
                
                expect(token.length).toBeGreaterThan(0)
                

                done()
            })
        })    
    })

    describe('when user does not exists', function () {
    
    describe('when token is not a string', function () {
        let password, token
       
        beforeEach(function () {
            token = [1, true, null, undefined, {}, [], function () { }, new Date].random()
            password = `password-${random()}`
        })

        it('should fail on non-string token', function () {
            expect(function () {
                unregisterUser(password,token, function () { })
            }).toThrowError(TypeError, `${token} is not a token`)
        })
    })

    describe('when token is empty or blank', function () {
        let password, token

        beforeEach(function () {
            token = ['', ' ', '\t', '\n'].random()
        })

        it('should fail on empty or blank token', function () {
            expect(function () {
                unregisterUser(password, token, function () { })
            }).toThrowError(Error, 'token is empty or blank')
        })
    }) 

    })

    describe('when password is a non-string', function () {
        let password

        beforeEach(function () {
            password = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        })

        it('should fail on non-string password', function () {
            expect(function () {
                unregisterUser(password, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTFkNjJkMjE3YzAwMTc2ZDhiN2QiLCJpYXQiOjE2MDQyNDY2NzUsImV4cCI6MTYwNDI1MDI3NX0.NVTxuz9Le43xI5_LJ--H51DYdv0fnxXCnDr86kcps0Y', function () { })
            }).toThrowError(TypeError, `${password} is not a password`)
        })
    }) 


    describe('when password is empty or blank', function () {
        let password

        beforeEach(function () {
            password = ['', ' ', '\t', '\n'].random()
        })

        it('should fail on non-string password', function () {
            expect(function () {
                unregisterUser(password, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTFkNjJkMjE3YzAwMTc2ZDhiN2QiLCJpYXQiOjE2MDQyNDY2NzUsImV4cCI6MTYwNDI1MDI3NX0.NVTxuz9Le43xI5_LJ--H51DYdv0fnxXCnDr86kcps0Y', function () { })
            }).toThrowError(Error, ` password is empty or blank`)
        })
    }) 
})