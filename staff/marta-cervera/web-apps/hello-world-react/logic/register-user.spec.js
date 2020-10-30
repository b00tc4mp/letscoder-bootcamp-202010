// TODO
const { random } = Math

describe('SPEC registerUser()', function () {
    describe("when register a new user", function () {
        let fullname, email, password, repassword, token

        beforeEach(function() {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password
        })

        it ('should succeded on a new user ', function(done) {
            registerUser(fullname,email,password,repassword, function(error) {
            
                expect(error).toBeNull()
                


                expect(true).toBeTrue()

                done()

            })
        })

        afterEach(function (done) {
            call('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth',
            { 'Content-type': 'application/json' },
            JSON.stringify({ username: email, password }),
            
            function(status,response){ 
                                
                expect(status).toBe(200)
                expect(response.length).toBeGreaterThan(0)

                token = JSON.parse(response).token

                expect(token.length).toBeGreaterThan(0)



                    call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json'
                },
                    JSON.stringify({ password }),
                    function (status, response) {
                    expect(status).toBe(204)
                    expect(response.length).toBe(0)

                        done ()
            
            
                }
            )


        })    
    })
     
})


})

describe (' when a user already exists', function () {

    let fullname, email,password,repassword, token

    beforeEach(function(done) {

            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password
            
            
            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            JSON.stringify({ fullname, username:email, password }),
            function(status, response) {
                
                expect(status).toBe(201)
                expect(response.length).toBe(0)
                console.log(response)
                
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
                

                }

            )

        })
      
    console.log("out",token)

       it('should fail on an already existing user', function (done) {
    console.log("it", token)
        registerUser(fullname, email, password, repassword, function(error){
            expect(true).toBeTrue
            done()

        })
    })

    afterEach(function (done) {
        console.log(token)
        console.log(fullname)
        call('DELETE','https://b00tc4mp.herokuapp.com/api/v2/users',
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
describe('should fail on non-string full name')
    let fullname, email, password, token

    befoerEach(function() {
        fullname = `fullname-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`        

    })
    it('should fail o non-string full name', function(){
        registerUser(fullname,email, password, repassword, function(error){
            expect(error).toBeNull()

        })
    })
    afterEach(function() {
        call('POST')
    })
 


