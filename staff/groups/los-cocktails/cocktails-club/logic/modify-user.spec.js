describe('SPEC modifyUser()', function (){

    describe('should succed on right token', function () {
        let fullname, email, password, repassword, token, changes, user
        beforeEach(function (done) {
            // create user and authenticate to get token
            fullname = `fullname-${random()}@mail.com`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            // repassword = password

            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                { 'Content-type': 'application/json' },
                `{ "fullname":"${fullname}", "username": "${email}", "password": "${password}" }`,
                // JSON.stringify({ fullname, username: email, password }),
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

        it(function (done) {
            changes = { age: 45, food: 'pasta', nacionality: 'argentinian' }
            // update user and retrieve to check if it is succesfully changed
            modifyUser(changes, token, error => {
                expect(error).toBeNull()

                call('GET',
                    'https://b00tc4mp.herokuapp.com/api/v2/users',
                    { Authorization: `Bearer ${token}` },
                    '',
                    function (status, response) {
                        expect(status).toBe(200)
                        user = JSON.parse(response)
                        expect(user).toBeOfType('object')
                        var {age,food,nacionality} = user
                        expect(age).toBe(45)
                        expect(food).toBe('pasta')
                        expect(nacionality).toBe('argentinian')
                        done()
                    }
                )
            })

        })

        afterEach(function (done) {
            // delete user
            call(
                "DELETE",
                "https://b00tc4mp.herokuapp.com/api/v2/users",
                { "Content-type": "application/json", Authorization: "Bearer " + token },
                `{"password": "${password}"}`,
                function (status, response) {
                  expect(status).toBe(204)
                  expect(response.length).toBe(0)
                  done()
                }
              );
        })



    })
}
)