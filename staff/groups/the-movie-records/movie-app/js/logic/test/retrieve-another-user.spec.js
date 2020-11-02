describe('SPEC retrieve_another_user()', function () {
    const { random } = Math

    describe("when token is a not string", function () {
        let token, id;

        beforeEach(function () {
            token = [1, true, null, undefined, {}, []].random()
            id = random().toString()

        });

        it("should fail if token is not a string", function () {
            expect(function () {
                retrieveAnotherUser(token, id, function () { });
            }).toThrowError(TypeError, `${token} is not a token`);
        });

    });
    //------------------------------------------------------------
    describe("when token is empty or blank", function () {
        let token, id;

        beforeEach(function () {
            token = ['', ' ', '\t', '\n'].random()
            id = random().toString()

        });

        it("should fail if token is empty or blank", function () {
            expect(function () {
                retrieveAnotherUser(token, id, function () { });
            }).toThrowError(Error, `token is empty or blank`);
        });

    });

    //-------------------------------------------------------------
    describe("when id is not a string", function () {
        let token, id;

        beforeEach(function () {
            token = random().toString()
            id = [1, true, null, {}, []].random()
        });

        it("should fail if id is not a string", function () {
            expect(function () {
                retrieveAnotherUser(token, id, function () { });
            }).toThrowError(TypeError, `${id} is not a id`);
        });

    });

    //-----------------------------------------------------------------
    describe("when id is empty or blank", function () {
        let token, id;

        beforeEach(function () {
            token = random().toString()
            id = ['', ' ', '\t', '\n'].random()

        })

        it("should fail if id is empty or blank", function () {
            expect(function () {
                retrieveAnotherUser(token, id, function () { });
            }).toThrowError(Error, `id is empty or blank`);
        })


    })

    //-----------------------------------------------------------------
    describe("when function is not a callback", function () {
        let token, id;

        beforeEach(function () {
            token = random().toString()
            id = random().toString()
            callback = [1, true, null, undefined, {}, [], 'string', new Date].random()

        })
        it("should fail if function is not a callback", function () {
            expect(function () {
                retrieveAnotherUser(token, id, callback);
            }).toThrowError(Error, `${callback} is not a callback`);
        })


    })

    describe('when retrieve another user is success', function () {
        let fullname, email, password, fullname2, email2, password2, id, token, token2 ;

        beforeEach(function (done) {
            fullname = 'John Another ' + random()
            email = 'john-another-' + random() + '@mail.com'
            password = 'pass-' + random()

            fullname2 = fullname + '2'
            email2 = email + '2'
            password2 = password + '2'

            id = 0
            token = ''
            token2 = ''

            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                { 'Content-type': 'application/json' },
                '{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '" }',
                function (status) {
                    expect(status).toBe(201)
                    call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                        { 'Content-type': 'application/json' },
                        '{ "fullname": "' + fullname2 + '", "username": "' + email2 + '", "password": "' + password2 + '" }',
                        function (status) {

                            expect(status).toBe(201)
                            call('POST',
                                'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                                { 'Content-type': 'application/json' },
                                '{ "username": "' + email2 + '", "password": "' + password2 + '" }',
                                function (status, response) {
                                    expect(status).toBe(200)
                                    token2 = JSON.parse(response).token;
                                    var tokenSplit = token2.split('.')[1]
                                    var tokenDecrypt = atob(tokenSplit)
                                    id = JSON.parse(tokenDecrypt).sub
                                    call('POST',
                                        'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                                        { 'Content-type': 'application/json' },
                                        '{ "username": "' + email + '", "password": "' + password + '" }',
                                        function (status,response) {
                                            expect(status).toBe(200)
                                            token = JSON.parse(response).token;
                                            done()
                                        })
                                })
                        })


                })

        })

        //---------------------------------------------------------------------------------------------------------

        it("should success on retrieve another user", function (done) {

            retrieveAnotherUser(token, id, function (error, user) {
                expect(user).toBeDefined()
                expect(error).toBeNull()
                expect(user.fullname).toBe(fullname2)
                expect(user.username).toBe(email2)
                done()

            })


        })


     //-------------------------------------------------------------------------------------------------------

     afterEach(function(done){
        call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
        {
            'Authorization': 'Bearer ' + token,
            'Content-type': 'application/json'
        },
        '{ "password": "' + password + '" }',
        function (status) {
            expect(status).toBe(204)
            
        }
    )
    call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
        {
            'Authorization': 'Bearer ' + token2,
            'Content-type': 'application/json'
        },
        '{ "password": "' + password2 + '" }',
        function (status) {
            expect(status).toBe(204) 
            done()
        }
    )


     })
    })



})





