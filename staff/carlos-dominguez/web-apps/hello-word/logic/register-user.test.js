(function () {
    console.log('TEST registerUser()');
    (function () {
        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = password
        registerUser(fullname, email, password, repassword, function (error) {
            console.log(' should succeed on new user')
            console.assert(error === null, 'should error be null')
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
                }
            )
        })
    })();
    (function () {
        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = password
        call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '" }',
            function (status, response) {
                if (status === 201) {
                    registerUser(fullname, email, password, repassword, function (error) {
                        console.log(' should fail on already existing user')
                        console.assert(error instanceof Error, 'should error be instanceof Error')
                        console.assert(error.message === 'user with username "' + email + '" already exists', 'should error message match expected')
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
                            }
                        )
                    })
                } else {
                    console.error('should not reach this point')
                }
            }
        )
    })();
    (function () {
        console.log(' should fail on non-string full name')
        var fullname = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = password
        var fail
        try {
            registerUser(fullname, email, password, repassword)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === fullname + ' is not a full name', 'should error message match expected')
    })();
    (function () {
        console.log(' should fail on empty or blank full name')
        var fullname = ['', ' ', '\t', '\n'].random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = password
        var fail
        try {
            registerUser(fullname, email, password, repassword)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'full name is empty or blank', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on non-string email')
        var fullname = 'John Doe ' + Math.random()
        var email = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        var password = 'pass-' + Math.random()
        var repassword = password
        var fail
        try {
            registerUser(fullname, email, password, repassword)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === email + ' is not an e-mail', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on empty or blank email')

        var fullname = 'John Doe ' + Math.random()
        var email = ['', ' ', '\t', '\n'].random()
        var password = 'pass-' + Math.random()
        var repassword = password
        var fail
        try {
            registerUser(fullname, email, password, repassword)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'e-mail is empty or blank', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail invalid email')
        var fullname = 'John Doe ' + Math.random()
        var email = ['john-doe#mail.com', '@mail.com', 'johh-doe@mail', 'john-doe@'].random()
        var password = 'pass-' + Math.random()
        var repassword = password
        var fail
        try {
            registerUser(fullname, email, password, repassword)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'invalid e-mail', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on non-string password')

        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        var repassword = 'pass-' + Math.random()
        var fail
        try {
            registerUser(fullname, email, password, repassword)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === password + ' is not a password', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on empty or blank password')
        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = ['', ' ', '\t', '\n'].random()
        var repassword = 'pass-' + Math.random()
        var fail
        try {
            registerUser(fullname, email, password, repassword)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'password is empty or blank', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on non-string password repeat')
        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        var fail
        try {
            registerUser(fullname, email, password, repassword)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === repassword + ' is not a password repeat', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on empty or blank password repeat')
        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = ['', ' ', '\t', '\n'].random()
        var fail
        try {
            registerUser(fullname, email, password, repassword)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'password repeat is empty or blank', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail non-matching passwords')
        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = password + '...'
        var fail
        try {
            registerUser(fullname, email, password, repassword)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'passwords don\'t match', 'should error message match expected')
    })();
})();