(function () {
    console.log('TEST registerUser()');

    (function () {
        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = password

        console.log(' should succeed on new user (Test1)')

        registerUser(fullname, email, password, repassword, function (error) {
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
                            if (status === 204) {
                                console.log(' \t Deleted the user registered for the test (Test1 registerUser)')   
                            } else {
                                console.log('Could not delete the user registered for the test (Test1 registerUser)')
                            }
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
                        console.log(' should fail on already existing user (Test2)')

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
                                        if (status === 204) {
                                            console.log(' \t Deleted the user registered for the test (Test2 registerUser)')   
                                        } else {
                                            console.log('Could not delete the user registered for the test (Test2 registerUser)')
                                        }
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
        console.log(' should fail on non-string full name (Test3)')

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
        console.log(' should fail on empty or blank full name (Test4)')

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
        console.log(' should fail on non-string email (Test5)')

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
        console.log(' should fail on empty or blank email (Test6)')

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
        console.log(' should fail invalid email (Test7)')

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
        console.log(' should fail on non-string password (Test8)')

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
        console.log(' should fail on empty or blank password (Test9)')

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
        console.log(' should fail on non-string password repeat (Test10)')

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
        console.log(' should fail on empty or blank password repeat (Test11)')

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
        console.log(' should fail non-matching passwords (Test12)')

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