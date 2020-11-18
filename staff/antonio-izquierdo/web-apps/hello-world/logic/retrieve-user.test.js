(function () {
    console.log('TEST retrieveUser()');

    (function () {
        var fullname = 'John Doe' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = password
        call('POST',
            'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '", "repassword": "' + repassword + '" }',
            function (status) {
                if (status === 201, "should status be 201")
                    call('POST',
                        'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                        { 'Content-type': 'application/json' },
                        '{ "username": "' + email + '", "password": "' + password + '" }',
                        function (status, response) {
                            var resText = JSON.parse(response)
                            token = resText.token
                            if (status === 200, "should status be 200") {
                                retrieveUser(token, function (error, item) {
                                    console.log(' should succed retrieving a user')
                                    console.assert(item.fullname === fullname)
                                    console.assert(!!item.fullname)
                                    console.assert(error === null, 'should error be null')
                                    if (status === 200) {
                                        call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                                            {
                                                'Authorization': 'Bearer ' + token,
                                                'Content-type': 'application/json'
                                            },
                                            '{ "password": "' + password + '" }',
                                            function (status, response) {
                                                console.assert(status === 204, 'should status be 204')
                                                console.assert(response.length === 0, 'should response be empty')

                                            }
                                        )
                                    }
                                })
                            }
                        })
            })
    })();

    (function () {

        console.log(' should fail on an empty or blank token')

        var token = ['', ' ', '\t', '\n'].random();
        var fail

        try {
            retrieveUser(token);
        } catch (error) {
            fail = error;
        }

        console.assert(fail instanceof Error, 'should error be defined and instace of Error');
        console.assert(fail.message === 'token is empty or blank', 'should error message match expected');
    })();

    (function () {

        console.log(' should fail on a non-string token')

        var token = [{}, true, null, undefined, 0, false].random;
        var fail

        try {
            retrieveUser(token);
        } catch (error) {
            fail = error;
        }

        console.assert(fail instanceof TypeError, 'should error be defined and instace of Error');
        console.assert(fail.message === token + ' is not a token', 'should error message match expected');
    })();
})();