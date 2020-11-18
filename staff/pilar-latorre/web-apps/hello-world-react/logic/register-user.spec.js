const { random } = Math

describe('SPEC registerUser()', function(){
    describe('When user is new', function(){
        let fullname, email, password, repassword, token

        beforeEach(function(){
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password
            
        })

        it('should succeed when user is new', function(done){
            registerUser(fullname,email,password,repassword,function(error){
                expect(error).toBeNull()
            
               done()
            })

        })

        afterEach(function(done){
          
            call('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                {'Content-type' : 'application/json'},
                JSON.stringify({username: email, password}),
                
                function(status,response){
                    expect(status).toBe(200)
                    expect(response.length).toBeGreaterThan(0)
                    
                    token = JSON.parse(response).token
                  
                    expect(token.length).toBeGreaterThan(0)
                   
                    call ('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                    {
                        Authorization: `Bearer ${token}`,
                        'Content-type' : 'application/json'
                    },
                    JSON.stringify({password}),
                    function(status,response){
                        expect(status).toBe(204)
                        expect(response.length).toBe(0)
        
                    done()
                    })
                }
            )    
        })
    })
})
describe('when user already exist', function(){
    let fullname, email, password, repassword, token

    beforeEach(function(){
        fullname = `fullname-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
        repassword = password

        call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
        { 'Content-type': 'application/json' },
        JSON.stringify({ fullname, username: email, password }),
        function (status, response) {
            expect(status).toBe(201)
            expect(response.length).toBe(0)
            
            it('should fail on already existing user', function(done){
            
            registerUser(fullname,email,password,repassword,function(error){
                expect(error).toBeIntanceOf(TypeError)
                expect(error.message).toEqual('user with username "' + email + '" already exists', 'should error message match expected')

                done()
            }) 
            })
            afterEach(function(done){
          
                call('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                    {'Content-type' : 'application/json'},
                    JSON.stringify({username: email, password}),
                    
                    function(status,response){
                        expect(status).toBe(200)
                        expect(response.length).toBeGreaterThan(0)
                        
                        token = JSON.parse(response).token
                      
                        expect(token.length).toBeGreaterThan(0)
                       
                        call ('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                        {
                            Authorization: `Bearer ${token}`,
                            'Content-type' : 'application/json'
                        },
                        JSON.stringify({password}),
                        function(status,response){
                            expect(status).toBe(204)
                            expect(response.length).toBe(0)
            
                        done()
                        })
                    }
                )    
            })
        })
    })
})  

describe('when fullname is a non-string', function(){
    let fullname,email,password,repassword

    beforeEach(function(){
        fullname = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
        repassword = password

    })
    it('should fail on non-string fullname', function(){
        expect(function(){
            registerUser(fullname,email,password,repassword,function(){
            }).toThrowError(TypeError, `${fullname} is not a full name`)
        })
    })
})

describe('when fullname is a blank or empty', function(){
    let fullname,email,password,repassword

    beforeEach(function(){
        fullname = ['', ' ', '\t', '\n'].random()
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
        repassword = password

    })
    it('should fail on empty or blank full name', function(){
        expect(function(){
            registerUser(fullname,email,password,repassword,function(){
            }).toThrowError(TypeError, `full name is empty or blank`)
        })
    })
})

describe('when email is non-string', function(){
    let fullname,email,password,repassword

    beforeEach(function(){
        fullname = `fullname-${random()}`
        email = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        password = `password-${random()}`
        repassword = password

    })
    it('should fail on non-string email', function(){
        expect(function(){
            registerUser(fullname,email,password,repassword,function(){
            }).toThrowError(TypeError, `${email} is not an e-mail`)
        })
    })
})

describe('when email is blank or empty', function(){
    let fullname,email,password,repassword

    beforeEach(function(){
        fullname = `fullname-${random()}`
        email = ['', ' ', '\t', '\n'].random()
        password = `password-${random()}`
        repassword = password

    })
    it('should fail on a blank or emplty email', function(){
        expect(function(){
            registerUser(fullname,email,password,repassword,function(){
            }).toThrowError(TypeError, `e-mail is empty or blank`)
        })
    })
})

describe('when email is not valid', function(){
    let fullname,email,password,repassword

    beforeEach(function(){
        fullname = `fullname-${random()}`
        email = ['john-doe#mail.com', '@mail.com', 'johh-doe@mail', 'john-doe@'].random()
        password = `password-${random()}`
        repassword = password

    })
    it('should fail on a non valid email', function(){
        expect(function(){
            registerUser(fullname,email,password,repassword,function(){
            }).toThrowError(TypeError, `invalid e-mail`)
        })
    })
})

describe('when password is a non-string', function(){
    let fullname,email,password,repassword

    beforeEach(function(){
        fullname = `fullname-${random()}`
        email = `email-${random()}@mail.com`
        password = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        repassword = `password-${random()}`

    })
    it('should fail on non-string password', function(){
        expect(function(){
            registerUser(fullname,email,password,repassword,function(){
            }).toThrowError(TypeError, `${password} is not a password`)
        })
    })
})

describe('when password is empty or blank', function(){
    let fullname,email,password,repassword

    beforeEach(function(){
        fullname = `fullname-${random()}`
        email = `email-${random()}@mail.com`
        password = ['', ' ', '\t', '\n'].random()
        repassword = `password-${random()}`

    })
    it('should fail on empty or blank password', function(){
        expect(function(){
            registerUser(fullname,email,password,repassword,function(){
            }).toThrowError(TypeError, `password is empty or blank`)
        })
    })
})

describe('when re-password is a non-string', function(){
    let fullname,email,password,repassword

    beforeEach(function(){
        fullname = `fullname-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
        repassword = [1, true, null, undefined, {}, [], function () { }, new Date].random()

    })
    it('should fail on non-string password repeat', function(){
        expect(function(){
            registerUser(fullname,email,password,repassword,function(){
            }).toThrowError(TypeError, `${repassword}is not a password repeat`)
        })
    })
})

describe('when re-password is empty or blank', function(){
    let fullname,email,password,repassword

    beforeEach(function(){
        fullname = `fullname-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
        repassword = ['', ' ', '\t', '\n'].random()

    })
    it('should fail on empty or blank password repeat', function(){
        expect(function(){
            registerUser(fullname,email,password,repassword,function(){
            }).toThrowError(TypeError, `password repeat is empty or blank`)
        })
    })
})
describe('when password and re-password is not matching', function(){
    let fullname,email,password,repassword

    beforeEach(function(){
        fullname = `fullname-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
        repassword = password + '...'

    })
    it('should fail non-matching passwords', function(){
        expect(function(){
            registerUser(fullname,email,password,repassword,function(){
            }).toThrowError(TypeError, `passwords don\'t match`)
        })
    })
})
describe('when callback is non-function', function(){
    let fullname,email,password,repassword,callback

    beforeEach(function(){
        fullname = `fullname-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
        repassword = `password-${random()}`
        callback = [1, true, null, undefined, {}, [], 'string', new Date].random()


    })
    it('should fail on non-function callback', function(){
        expect(function(){
            registerUser(fullname,email,password,repassword,callback,function(){
            }).toThrowError(TypeError, `${callback}is not a callback`)
        })
    })
})



