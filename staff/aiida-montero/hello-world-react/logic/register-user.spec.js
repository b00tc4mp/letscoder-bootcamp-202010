const{ random }= Math

describe('SPEC registerUser()', function (){
    describe ('should succed on new user'), function () {

        let fullname, email, password, repassword

        beforeEach(function(done){
            fullname = `fulname-${random()}`
            username = `email-${random()}`
            password = `password-${random()}`
            repassword = password


            call('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth',
            {'Content-type': 'application/json'},
            JSON.stringify({ username: email, password }),
            function (status,response) {
                expect(status).tobe(200)
                expect(response.length).toBeGreaterThan(0)

                token= JSON.parse(response).token

                expect(token.length).toBeGreaterThan(0)

                call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                {
                    Authorization : `Bearer ${token}`,
                    'Conten-type': 'application/json'
                },
                JSON.stringify({password}),
                function(status,response) {
                    expect(status).toBe(204)
                    expect(response.length).toBe(0)
                    
                    done()
            }
          )
      } 
    )
})

