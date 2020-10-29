(function () {
    console.log('TEST retrieveAllUsers()');

    (function () {
        console.log(' should retrieve all users (Test1)')
        var fullname = 'John Retrieve ' + Math.random()
        var email = 'johnRetrieve-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

           call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '" }',
            function (status, response) {
                if (status === 201) {
                        call('POST',
                        'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                        { 'Content-type': 'application/json' },
                        '{ "username": "' + email + '", "password": "' + password + '" }',
                        function (status, response) {
                            if (status === 200) {
                                var res = JSON.parse(response)
                                retrieveAllUsers(res.token, function(error, user) {
                                    console.assert(!error, 'should not return error when retrieve with existing user')
                                    console.assert(user, 'should return a user when retrieve')
                                })
                                call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                                    {
                                        'Authorization': 'Bearer ' + res.token,
                                        'Content-type': 'application/json'
                                    },
                                    '{ "password": "' + password + '" }',
                                    function (status, response) {
                                        if (status === 204) {
                                            console.log(' \t Deleted the user registered for the test (Test1 retrieveAllUsers)')   
                                        } else {
                                            console.log('Could not delete the user registered for the test (Test1 retrieveAllUsers)')
                                        }
                                    }
                                    )
                            }
                            else {
                                console.error('should not reach this point')
                            }
                        }
                    )
                } else {
                    console.error('should not reach this point')
                }
        })
    })();

    (function () {
        console.log(' should fail retrieve of all users if token not exist (Test2)')
        var token =  (Math.random() * 1000).toString();
    
        retrieveAllUsers(token, function(error, user) {
            console.assert(error instanceof Error, 'should error be defined and instance of Error')
            console.assert(error.message, 'invalid token')
        })
                               
    })();

    (function () {
        console.log(' should fail on retrieve all users if token not string (Test3)')
        var token =  (Math.random() * 1000);
        var fail
        try {
            retrieveAllUsers(token)
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
            retrieveAllUsers(token)
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

        try {
            retrieveAllUsers(token, callback)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === callback + ' is not a callback', 'should error message match expected')
                               
    })();

})();