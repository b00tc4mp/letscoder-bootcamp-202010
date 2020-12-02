describe('SPEC registerUser()', function(){
    describe('when user already exist', function(){
        let fullname,email,password,repassword,token

        beforeEach(function(done) {
            fullname = `fullname-${random()}@mail.com`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password

            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            {'Content-type': 'application/json' },
            JSON.stringify({fullname, username: email , password}),
            function(status,response){
                expect(status).toBe(201)
                expect(response.length).toBe(0)
                
                call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                    {'Content-type': 'application/json' },
                    JSON.stringify({ username: email , password}),
                    function(status,response) {
                        expect(status).toBe(200)
                        expect(response.length).toBeGreaterThan(0)
                        token = JSON.parse(response).token
                        done()
                    })
            })
            })
        

        it('should fail on already existing user', function(done){
            registerUser(fullname,email,password,repassword, function(error){
                expect(error).toBeInstanceOf(Error)
                expect(error.message).toBe(`user with username \"${email}" already exists`)
                done()
            })
        })

        afterEach(function() {
            call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                    {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json'
                    },
                    JSON.stringify({ username: email , password}),
                    function(status,response){
                        expect(status).toBe(204)
                        expect(response.length).toBe(0)
                    }
            )
        })


    })

    describe('when user does not exist', function(){
        let fullname,email,password,repassword,token

        it('should succed on non-existing user', function(done){
            
            fullname = `fullname-${random()}@mail.com`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password

            registerUser(fullname,email,password,repassword, function(error){
                expect(error).toBeNull()
                done()
            })
        })

        afterEach(function() {

            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                    {'Content-type': 'application/json' },
                    JSON.stringify({ username: email , password}),
                    function(status,response) {
                        expect(status).toBe(200)
                        expect(response.length).toBeGreaterThan(0)
                        token = JSON.parse(response).token
                        
                        call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                                {
                                    Authorization: `Bearer ${token}`,
                                    'Content-type': 'application/json'
                                },
                                JSON.stringify({ username: email , password}),
                                function(status,response){
                                    expect(status).toBe(204)
                                    expect(response.length).toBe(0)
                                }
                        )
                    })

        })


    })

            

    describe('when user does not exist', function(){
        let fullname,email,password,repassword

        it('should fail on a non-string fullname', function(){
            
            fullname = [1, true, null, undefined, {}, [], function() {}, new Date].random()
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password
            
            expect(function() {
                registerUser(fullname,email,password,repassword, function() {})
            }).toThrowError(TypeError, fullname+' is not a full name')
            
        })
    })
    describe('when user does not exist', function(){
        let fullname,email,password,repassword

        it('should fail on a empty or blank fullname', function(){
            
            fullname = ['',' ', '\t', '\n'].random()
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password
            
            expect(function() {
                registerUser(fullname,email,password,repassword, function() {})
            }).toThrowError(Error, 'full name is empty or blank')
                
            
        })
    })
    describe('when user does not exist', function(){
        let fullname,email,password,repassword

        it('should fail on a non-string e-mail', function(){
            
            fullname = fullname = `fullname-${random()}@mail.com`
            email = [1, true, null, undefined, {}, [], function() {}, new Date].random()
            password = `password-${random()}`
            repassword = password
            
            expect(function() {
                registerUser(fullname,email,password,repassword, function() {})
            }).toThrowError(TypeError, email+' is not an e-mail')
            
        })
    })
    describe('when user does not exist', function(){
        let fullname,email,password,repassword

        it('should fail on a empty or blank e-mail', function(){
            
            fullname = `fullname-${random()}@mail.com`
            email = ['',' ', '\t', '\n'].random()
            password = `password-${random()}`
            repassword = password
            
            expect(function() {
                registerUser(fullname,email,password,repassword, function() {})
            }).toThrowError(Error, 'e-mail is empty or blank')
                
            
        })
    })
    describe('when user does not exist', function(){
        let fullname,email,password,repassword

        it('should fail on invalid e-mail', function(){
            
            fullname = `fullname-${random()}@mail.com`
            email = ['john-doe#mail.com','@mail.com','john-doe@mail','john-doe@','john@doe@mail.com'].random();
            password = `password-${random()}`
            repassword = password
            
            expect(function() {
                registerUser(fullname,email,password,repassword, function() {})
            }).toThrowError(Error, 'invalid e-mail')
                
            
        })
    })
    describe('when user does not exist', function(){
        let fullname,email,password,repassword

        it('should fail on a non-string password', function(){
            
            fullname = fullname = `fullname-${random()}@mail.com`
            email = `email-${random()}@mail.com`
            password = [1, true, null, undefined, {}, [], function() {}, new Date].random()
            repassword = `repassword-${random()}`
            
            expect(function() {
                registerUser(fullname,email,password,repassword, function() {})
            }).toThrowError(TypeError, password+' is not a password')
            
        })
    })
    describe('when user does not exist', function(){
        let fullname,email,password,repassword

        it('should fail on a empty or blank password', function(){
            
            fullname = `fullname-${random()}@mail.com`
            email = `email-${random()}@mail.com`
            password = ['',' ', '\t', '\n'].random()
            repassword = `repassword-${random()}`
            
            expect(function() {
                registerUser(fullname,email,password,repassword, function() {})
            }).toThrowError(Error, 'password is empty or blank')
                
            
        })
    })
    describe('when user does not exist', function(){
        let fullname,email,password,repassword

        it('should fail on a non-string repassword', function(){
            
            fullname = fullname = `fullname-${random()}@mail.com`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = [1, true, null, undefined, {}, [], function() {}, new Date].random()
            
            expect(function() {
                registerUser(fullname,email,password,repassword, function() {})
            }).toThrowError(TypeError, repassword+' is not a password repeat')
            
        })
    })
    describe('when user does not exist', function(){
        let fullname,email,password,repassword

        it('should fail on a empty or blank repassword', function(){
            
            fullname = `fullname-${random()}@mail.com`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = ['',' ', '\t', '\n'].random()
            
            expect(function() {
                registerUser(fullname,email,password,repassword, function() {})
            }).toThrowError(Error, 'password repeat is empty or blank')
                
            
        })
    })
    describe('when user does not exist', function(){
        let fullname,email,password,repassword

        it('should fail on non-matching passwords', function(){
            
            fullname = `fullname-${random()}@mail.com`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = `wrong-${password}`
            
            expect(function() {
                registerUser(fullname,email,password,repassword, function() {})
            }).toThrowError(Error, 'passwords do not match')
                
            
        })
    })
    describe('when user does not exist', function(){
        let fullname,email,password,repassword

        it('should fail on a non-function callback', function(){
            
            fullname = `fullname-${random()}@mail.com`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password
            callback = [1, true, null, undefined, {}, [], new Date].random()
            
            
            expect(function() {
                registerUser(fullname,email,password,repassword,callback )
            }).toThrowError(TypeError, callback + ' is not a callback')
                
            
        })
    })
    
})