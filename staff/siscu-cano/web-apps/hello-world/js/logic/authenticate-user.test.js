(function () {
    console.log('TEST authenticateUser()');

    (function () {
        console.log(' should authenticate if the user we tested already existed (Test1)')
        var fullname = 'John Mama ' + Math.random()
        var email = 'johnmama-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '" }',
            function (status, response) {
                if (status === 201) {
                    authenticateUser(email, password, function (error, token) {
                        console.assert(!error, 'should not return error when authenticating with existing user')
                        console.assert(token, 'should return a token when authenticating')
                        console.assert(typeof token === 'string', 'should returned token of type string')
                        call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                            {
                                'Authorization': 'Bearer ' + token,
                                'Content-type': 'application/json'
                            },
                            '{ "password": "' + password + '" }',
                            function (status, response) {
                                if (status === 204) {
                                    console.log(' \t Deleted the user registered for the test (Test1)')   
                                } else {
                                    console.log('Could not delete the user registered for the test (Test1)')
                                }
                            }
                        )
                    })
                } else {
                    console.error('should not reach this point')
                }
        })
    })();

    (function () {
        console.log(' should fail on non-existing user (Test2)')

        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        authenticateUser(email, password, function (error, token) {
            console.assert(error instanceof Error, 'should error be defined and instance of Error')
            console.assert(error.message, 'username and/or password wrong')
        })
    })();

    (function () {
        console.log(' should fail on wrong password (Test3)')

        var fullname = 'John lol ' + Math.random()
        var email = 'johnlol-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '" }',
            function (status, response) {
                if (status === 201) {
                    authenticateUser(email, 'password', function (error, token) {
                        console.assert(error instanceof Error, 'should error be defined and instance of Error')
                        console.assert(error.message, 'username and/or password wrong')
                        call('POST',
                        'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                        { 'Content-type': 'application/json' },
                        '{ "username": "' + email + '", "password": "' + password + '" }',
                        function (status, response) {
                            if (status === 200) {
                                var res = JSON.parse(response)
                                call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                                    {
                                        'Authorization': 'Bearer ' + res.token,
                                        'Content-type': 'application/json'
                                    },
                                    '{ "password": "' + password + '" }',
                                    function (status, response) {
                                        if (status === 204) {
                                            console.log(' \t Deleted the user registered for the test (Test3)')   
                                        } else {
                                            console.log('Could not delete the user registered for the test (Test3)')
                                        }
                                    }
                                    )
                            }
                            else {
                                console.error('should not reach this point')
                            }
                        }
                    )
                    })
                } else {
                    console.error('should not reach this point')
                }
        })
    })();

    (function () {
        console.log(' should fail on wrong email (Test4)')

        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
        { 'Content-type': 'application/json' },
        '{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '" }',
        function (status, response) {
            if (status === 201) {
                authenticateUser('email@notexist.com', password, function (error, token) {
                    console.assert(error instanceof Error, 'should error be defined and instance of Error')
                    console.assert(error.message, 'username and/or password wrong')
                    call('POST',
                    'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                    { 'Content-type': 'application/json' },
                    '{ "username": "' + email + '", "password": "' + password + '" }',
                    function (status, response) {
                        if (status === 200) {
                            var res = JSON.parse(response)
                            call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                                {
                                    'Authorization': 'Bearer ' + res.token,
                                    'Content-type': 'application/json'
                                },
                                '{ "password": "' + password + '" }',
                                function (status, response) {
                                    if (status === 204) {
                                        console.log(' \t Deleted the user registered for the test (Test4)')   
                                    } else {
                                        console.log('Could not delete the user registered for the test (Test4)')
                                    }
                                }
                                )
                        }
                        else {
                            console.error('should not reach this point')
                        }
                    }
                )
                })
            } else {
                console.error('should not reach this point')
            }
    })
    })();

    (function () {
        console.log(' should fail on non-string email (Test5)')

        var email = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        var password = 'pass-' + Math.random()

        var fail

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === email + ' is not an e-mail', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on empty or blank email (Test 6)')

        var email = ['', ' ', '\t', '\n'].random()
        var password = 'pass-' + Math.random()

        var fail

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === email + ' is empty or blank', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail invalid email (Test7)')

        var email = ['john-doe#mail.com', '@mail.com', 'johh-doe@mail', 'john-doe@'].random()
        var password = 'pass-' + Math.random()

        var fail

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'invalid e-mail', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on non-string password (Test8)')

        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = [1, true, null, undefined, {}, [], function () { }, new Date].random()

        var fail

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === password + ' is not a password', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on empty or blank password (Test9)')

        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = ['', ' ', '\t', '\n'].random()

        var fail

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === password + ' is empty or blank', 'should error message match expected')
    })();

})();