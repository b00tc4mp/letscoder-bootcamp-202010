// TODO test here
(function () {
    console.log('TEST retrieveUser()');

    (function () {
        console.log(' should retrieve user data if the user we tested already existed (Test1)')
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
                                retrieveUser(res.token, function(error, user) {
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
                                            console.log(' \t Deleted the user registered for the test (Test1 retrieveUser)')   
                                        } else {
                                            console.log('Could not delete the user registered for the test (Test1 retrieveUser)')
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
        console.log(' should fail retrieve if token not exist (Test1)')
        var token =  (Math.random() * 1000).toString();
    
        retrieveUser(token, function(error, user) {
            console.assert(error instanceof Error, 'should error be defined and instance of Error')
            console.assert(error.message, 'invalid token')
        })
                               
    })();
})();