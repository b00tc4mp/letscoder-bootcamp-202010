(function () {
    console.log('TEST modifyUser()');

    (function () {
        console.log(' should fail when token is different to string (Test1)')
        var token = [1, true, null, undefined, {}, [], new Date].random()
        var body = { "test" : "test"}
        var fail

        try {
            modifyUser(token, body, function(){})
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === token + ' is not a token', 'should error message match expected')
                               
    })();

    (function () {
        console.log(' should fail when token is empty or blank (Test2)')
        var token = ['', ' ', '\t', '\n'].random()
        var body = { "test" : "test"}
        var fail

        try {
            modifyUser(token, body, function(){})
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of Error')
        console.assert(fail.message === token + ' is empty or blank', 'should error message match expected')
                               
    })();

    (function () {
        console.log(' should fail when callback is not a function (Test3)')
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkzZmMwNTAxYmZkNjAwMTc3ZTI0ZTAiLCJpYXQiOjE2MDM1NjU4MDIsImV4cCI6MTYwMzU2OTQwMn0.SeN0CI-dFxr5b8Ib04CAHrKePhqETKO26h-L9K___eQ"
        var callback = [1, true, null, undefined, {}, [], new Date].random()
        var body = { "test" : "test"}
        var fail

        try {
            modifyUser(token, body, callback)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === callback + ' is not a callback', 'should error message match expected')
                               
    })();

    (function () {
        console.log(' should fail when body is not defined (Test4)')
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkzZmMwNTAxYmZkNjAwMTc3ZTI0ZTAiLCJpYXQiOjE2MDM1NjU4MDIsImV4cCI6MTYwMzU2OTQwMn0.SeN0CI-dFxr5b8Ib04CAHrKePhqETKO26h-L9K___eQ"
        var fail

        try {
            modifyUser(token, undefined, function(){})
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of Error')
        console.assert(fail.message === 'body is not defined', 'should error message match expected')
                               
    })();

    (function () {
        console.log(' should user be modify successfully (Test5)')
        var fullname = 'John Modify ' + Math.random()
        var email = 'johnModify-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var body = '{ "test9": "test9"}'

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
                                modifyUser(res.token, body,  function(error) {
                                    console.assert(!error, 'should not return error when user data was modified')
                                })
                                call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                                    {
                                        'Authorization': 'Bearer ' + res.token,
                                        'Content-type': 'application/json'
                                    },
                                    '{ "password": "' + password + '" }',
                                    function (status, response) {
                                        if (status === 204) {
                                            console.log(' \t Deleted the user registered for the test (Test1 modifyUser)')   
                                        } else {
                                            console.log('Could not delete the user registered for the test (Test1 modifyUser)')
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
        console.log(' should fail if token is expired (Test6)')
        var token = (Math.random() * 1000).toString();
        var body = '{ "test9": "test9"}'
        
        modifyUser(token, body,  function(error) {
            console.assert(error instanceof Error, 'should error be defined and an instance of Error')
            console.assert(error.message === 'invalid token', 'should error message match expected')
        })
                                
    })();

})();