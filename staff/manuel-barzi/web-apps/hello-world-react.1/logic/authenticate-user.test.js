(function () {
    console.log('TEST authenticateUser()');

    (function () {
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "username": "' + email + '", "password": "' + password + '" }',
            function (status, response) {
                console.assert(status === 201, 'should status be 201')
                console.assert(response.length === 0, 'should response be empty')

                authenticateUser(email, password, function (error, token) {
                    console.log(' should succeed on existing user')

                    console.assert(error === null, 'should error be null')
                    // console.assert(token, 'should token exist')
                    console.assert(typeof token === 'string', 'should token be a string')
                    console.assert(token.length > 0, 'should token length be greater than 0')

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
                })
            })
    })();

    (function () {
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        authenticateUser(email, password, function (error, token) {
            console.log(' should fail on non-existing user')

            console.assert(error instanceof Error, 'should error be defined')
            console.assert(error.message, 'username and/or password wrong')

            console.assert(token === undefined, 'should token be undefined')
        })
    })();

    (function () {
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "username": "' + email + '", "password": "' + password + '" }',
            function (status, response) {
                console.assert(status === 201, 'should status be 201')
                console.assert(response.length === 0, 'should response be empty')

                authenticateUser(email, password + '-wrong', function (error, token) {
                    console.log(' should fail on wrong password')

                    console.assert(error instanceof Error, 'should error be defined')
                    console.assert(error.message, 'username and/or password wrong')

                    console.assert(token === undefined, 'should token be undefined')

                    call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth', { 'Content-type': 'application/json' },
                        '{ "username": "' + email + '", "password" : "' + password + '" }',
                        function (status, response) {
                            console.assert(status === 200, 'should status be 200')

                            var res = JSON.parse(response)

                            var token = res.token

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
                        })
                })
            })
    })();

    (function () {
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "username": "' + email + '", "password": "' + password + '" }',
            function (status, response) {
                console.assert(status === 201, 'should status be 201')
                console.assert(response.length === 0, 'should response be empty')

                authenticateUser('wrong-' + email, password, function (error, token) {
                    console.log(' should fail on wrong e-mail')

                    console.assert(error instanceof Error, 'should error be defined')
                    console.assert(error.message, 'username and/or password wrong')

                    console.assert(token === undefined, 'should token be undefined')

                    call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth', { 'Content-type': 'application/json' },
                        '{ "username": "' + email + '", "password" : "' + password + '" }',
                        function (status, response) {
                            console.assert(status === 200, 'should status be 200')

                            var res = JSON.parse(response)

                            var token = res.token

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
                        })
                })
            })
    })();

    (function () {
        console.log(' should fail on non-string email')

        var email = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        var password = 'pass-' + Math.random()

        var fail

        try {
            authenticateUser(email, password, function () { })
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === email + ' is not an e-mail', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on empty or blank email')

        var email = ['', ' ', '\t', '\n'].random()
        var password = 'pass-' + Math.random()

        var fail

        try {
            authenticateUser(email, password, function () { })
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'e-mail is empty or blank', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail invalid email')

        var email = ['john-doe#mail.com', '@mail.com', 'johh-doe@mail', 'john-doe@'].random()
        var password = 'pass-' + Math.random()

        var fail

        try {
            authenticateUser(email, password, function () { })
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'invalid e-mail', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on non-string password')

        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = [1, true, null, undefined, {}, [], function () { }, new Date].random()

        var fail

        try {
            authenticateUser(email, password, function () { })
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === password + ' is not a password', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on empty or blank password')

        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = ['', ' ', '\t', '\n'].random()

        var fail

        try {
            authenticateUser(email, password, function () { })
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'password is empty or blank', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on non-function callback')

        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        var callback = [1, true, null, undefined, {}, [], 'string', new Date].random()

        var fail

        try {
            authenticateUser(email, password, callback)
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === callback + ' is not a callback', 'should error message match expected')
    })();

    // TODO implement unit test cases
})();