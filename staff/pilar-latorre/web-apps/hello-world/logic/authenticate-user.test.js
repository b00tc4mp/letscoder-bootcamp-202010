(function () {
    console.log('TEST authenticateUser()');

    (function () {
        

        var fullname = 'John Doe' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        call('POST',
            'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '" }',
            function (status, response) {
                if (status === 201)
                    authenticateUser(email, password, function (error, token) {
                        console.log(' should succed on existing user');
                        console.assert(!error, ' should not return error when we authenticate with an existing user')
                        console.assert(token, ' should return token when we authenticate')
                        console.assert(token.length>0, " should token length be bigger than 0")
                        console.assert(typeof token === 'string', ' should return a string token')
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

                else {
                    console.error(' should not reach this point')
                }
            }

        )

    })();

    (function () {
        

        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        authenticateUser(email, password + '-wrong', function (error) {
            console.log(' should fail on non-existing user');

            console.assert(error instanceof Error, 'should  error be defined and instace of Error');
            console.assert(error.message === 'username and/or password wrong', 'should error message match expected');

        });
    })();

    (function () {
        console.log(' should fail on non-string e-mail');


        var email = [1, true, null, undefined, {}, [], function () { }, new Date].random();
        var password = 'pass-' + Math.random();


        var fail

        try {
            authenticateUser(email, password, function(){});
        } catch (error) {
            fail = error;
        }

        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError');
        console.assert(fail.message === email + ' is not an e-mail', 'should error message match expected');
    })();

    (function () {
        console.log(' should fail on empty or blank email');

        var email = ['', ' ', '\t', '\n'].random();
        var password = 'pass-' + Math.random();

        var fail

        try {
            authenticateUser(email, password, function(){});
        } catch (error) {
            fail = error;
        }

        console.assert(fail instanceof Error, 'should error be defined and instace of TypeError');
        console.assert(fail.message === 'e-mail is empty or blank', 'should error message match expected');

    })();

    (function () {
        console.log(' should fail invalid email');


        var email = ['john-doe#mail.com', '@mail.com', 'johh-doe@mail', 'john-doe@'].random();
        var password = 'pass-' + Math.random();


        var fail;

        try {
            authenticateUser(email, password, function(){});
        } catch (error) {
            fail = error;
        }

        console.assert(fail instanceof Error, 'should error be defined and intance of TypeError');
        console.assert(fail.message === 'invalid e-mail', 'should error message match expected');

    })();

    (function () {
        console.log(' should fail on non-string password');


        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = [1, true, null, undefined, {}, [], function () { }, new Date].random();


        var fail

        try {
            authenticateUser(email, password, function(){});
        } catch (error) {
            fail = error;
        }

        console.assert(fail instanceof TypeError, 'should error be defined and intance of TypeError');
        console.assert(fail.message === password + 'is not a password', 'should error message match expected');

    })();

    (function () {
        console.log(' should fail on empty or blank password');


        var email = 'jonhdoe-' + Math.random() + '@mail.com'
        var password = ['', ' ', '\t', '\n'].random();


        var fail

        try {
            authenticateUser(email, password, function(){});
        } catch (error) {
            fail = error;
        }

        console.assert(fail instanceof Error, 'should error be defined and instance of Error');
        console.assert(fail.message === 'password is empty or blank', 'should error message match expected');
    })();



    (function () {
        console.log(' should fail on wrong email');

        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        authenticateUser('-wrong' + email, password, function (error) {
            console.assert(error instanceof Error, 'should  error be defined and instace of Error');
            console.assert(error.message === 'username and/or password wrong', 'should error message match expected');

        });

    })();

    

})();



