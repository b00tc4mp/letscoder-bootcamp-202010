

describe('SPEC authenticaUser()', function () {
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
 
                    done()
                }
            )
        })

        it('should succeed when username and password are correct', function (done) {
          
            authenticateUser(email,password, function (error, token) {
                expect(error).toBeNull()
                //expect(typeOf.token).toBe('string')
                expect(token.length).toBeGreaterThan(0)
                //expect(status).toBe(201)

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



    describe('when email is non-string', function(){
        let email,password
    
        beforeEach(function(){
            email = [1, true, null, undefined, {}, [], function () { }, new Date].random()
            password = `password-${random()}`
            
        })
        it('should fail on non-string email', function(){
            expect(function(){
                authenticateUser(email,password,function(){})
                }).toThrowError(TypeError, `${email} is not an e-mail`)
            
        })
    })
    describe('when email is blank or empty', function(){
        let email,password
    
        beforeEach(function(){
           
            email = ['', ' ', '\t', '\n'].random()
            password = `password-${random()}`
                
        })
        it('should fail on a blank or emplty email', function(){
            expect(function(){
                authenticateUser(email,password,function(){})
                }).toThrowError(Error, `e-mail is empty or blank`)
            
        })
    })
    
    describe('when email is not valid', function(){
        let email,password
    
        beforeEach(function(){
           
            email = ['john-doe#mail.com', '@mail.com', 'johh-doe@mail', 'john-doe@'].random()
            password = `password-${random()}`
                
        })
        it('should fail on a non valid email', function(){
            expect(function(){
                authenticateUser(email,password,function(){})
                }).toThrowError(Error, `invalid e-mail`)
            
        })
    })
    
    describe('when password is a non-string', function(){
        let email,password
    
        beforeEach(function(){
           
            email = `email-${random()}@mail.com`
            password = [1, true, null, undefined, {}, [], function () { }, new Date].random()
            repassword = `password-${random()}`
    
        })
        it('should fail on non-string password', function(){
            expect(function(){
                authenticateUser(email,password,function(){})
                }).toThrowError(TypeError, `${password} is not a password`)
            
        })
    })
    
    describe('when password is empty or blank', function(){
        let email,password
    
        beforeEach(function(){
           
            email = `email-${random()}@mail.com`
            password = ['', ' ', '\t', '\n'].random()
            repassword = `password-${random()}`
    
        })
        it('should fail on empty or blank password', function(){
            expect(function(){
                authenticateUser(email,password,function(){})
                }).toThrowError(Error, `password is empty or blank`)
            
        })
    })

 
})