(function () {
    console.log('TEST retrieveAnotherUser()');

    (function () {
        console.log(' should retrieve another user data if the user we tested already existed (Test1)')
        var fullname = 'John Another ' + Math.random()
        var email = 'john-another-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        var fullname2 = fullname + '2'
        var email2 = email + '2'
        var password2 = password + '2'

        var id = 0
        var token = ''

        call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '" }',
            function (status, response) {
                if (status === 201) {
                    call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                        { 'Content-type': 'application/json' },
                        '{ "fullname": "' + fullname2 + '", "username": "' + email2 + '", "password": "' + password2 + '" }',
                        function (status, response) {
                            if (status === 201) {
                                call('POST',
                                    'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                                    { 'Content-type': 'application/json' },
                                    '{ "username": "' + email2 + '", "password": "' + password2 + '" }',
                                    function (status, response) {
                                        if (status === 200) {
                                            token = JSON.parse(response).token;
                                            var tokenSplit = token.split('.')[1]
                                            var tokenDecrypt = atob(tokenSplit)
                                            id = JSON.parse(tokenDecrypt).sub
                                            call('POST',
                                                'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                                                { 'Content-type': 'application/json' },
                                                '{ "username": "' + email + '", "password": "' + password + '" }',
                                                function (status, res) {
                                                    if (status === 200) {
                                                        retrieveAnotherUser(JSON.parse(res).token, id, function (error, user) {
                                                            console.assert(user, 'should return a user when retrieve')
                                                            console.assert(!error, 'should not return error when retrieve with existing user')
                                                            console.assert(user.fullname === fullname2 ,'should fullname equal to fullname 2')
                                                            console.assert(user.username === email2 ,'should username equal to username 2')
                                                        })

                                                        call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                                                            {
                                                                'Authorization': 'Bearer ' + JSON.parse(res).token,
                                                                'Content-type': 'application/json'
                                                            },
                                                            '{ "password": "' + password + '" }',
                                                            function (status, response) {
                                                                if (status === 204) {
                                                                    console.log(' \t Deleted the user registered for the test (Test1 retrieveAnotherUser)')
                                                                } else {
                                                                    console.log('Could not delete the user registered for the test (Test1 retrieveAnotherUser)')
                                                                }
                                                            }
                                                        )
                                                        call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                                                            {
                                                                'Authorization': 'Bearer ' + token,
                                                                'Content-type': 'application/json'
                                                            },
                                                            '{ "password": "' + password2 + '" }',
                                                            function (status, response) {
                                                                if (status === 204) {
                                                                    console.log(' \t Deleted the user registered for the test (Test1 retrieveAnotherUser)')
                                                                } else {
                                                                    console.log('Could not delete the user registered for the test (Test1 retrieveAnotherUser)')
                                                                }
                                                            }
                                                        )
                                                    }
                                                    else {
                                                        console.error('should not reach this point')
                                                    }
                                                }
                                            )
                                        }
                                    }
                                )
                            }
                        })

                } else {
                    console.error('should not reach this point')
                }
            })
    })();

    (function () {
        console.log(' should fail retrieve another user if token not exist (Test2)')
        var token =  (Math.random() * 1000).toString();
        var id = (Math.random() * 1000).toString();
        retrieveAnotherUser(token, id, function(error, user) {
            console.assert(error instanceof Error, 'should error be defined and instance of Error')
            console.assert(error.message === 'invalid token', 'should error message match expected')
        })

    })();

    (function () {
        console.log(' should fail retrieve another user if token not string (Test3)')
        var token =  (Math.random() * 1000);
        var fail
        try {
            retrieveAnotherUser(token)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and instance of Error')
        console.assert(fail.message === token + ' is not a token')

    })();

    (function () {
        console.log(' should fail when token is empty or blank (Test4)')
        var token = ['', ' ', '\t', '\n'].random()
        var fail
        try {
            retrieveAnotherUser(token)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of Error')
        console.assert(fail.message === 'token is empty or blank', 'should error message match expected')

    })();

    (function () {
        console.log(' should fail when callback is not a function (Test5)')
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkzZmMwNTAxYmZkNjAwMTc3ZTI0ZTAiLCJpYXQiOjE2MDM1NjA5MzIsImV4cCI6MTYwMzU2NDUzMn0.fFh73uXSkBT4jpqf6Lgz-_dG_X6A3KzD-dEp51MPlks";
        var callback = [1, true, null, undefined, {}, [], new Date].random()
        var id = (Math.random() * 1000).toString();

        try {
            retrieveAnotherUser(token, id, callback)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === callback + ' is not a callback', 'should error message match expected')

    })();

    (function () {
        console.log(' should fail retrieve another user if id not string (Test6)')
        var token =  (Math.random() * 1000).toString();
        var id = [1, true, null, undefined, {}, [], new Date].random()
        var fail
        try {
            retrieveAnotherUser(token, id)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and instance of Error')
        console.assert(fail.message === id + ' is not a id')

    })();

    (function () {
        console.log(' should fail when id is empty or blank (Test7)')
        var token =  (Math.random() * 1000).toString();
        var id = ['', ' ', '\t', '\n'].random()
        var fail
        try {
            retrieveAnotherUser(token, id)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of Error')
        console.assert(fail.message === 'id is empty or blank', 'should error message match expected')
    })();

})();