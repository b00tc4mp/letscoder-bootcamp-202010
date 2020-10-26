(function (){

    console.log('Test authenticateUser()');

    (function () {

        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        call('POST','https://b00tc4mp.herokuapp.com/api/v2/users',
        {'Content-type':'application/json'},
        '{"username": "' + email + '", "password": "' + password + '"}',function(status,response){
            console.assert(status === 201, 'status should be 201');
            if(status === 201){
                authenticateUser(email,password,function(error,token){
                    console.log(' should succeed on existing user');
                    console.assert(error === null, 'error should be null');
                    console.assert(token !== undefined,'token should be defined');
                    console.assert(token.length !== 0, 'token should not be empty');
                    //var token = token;
                    call('DELETE','https://b00tc4mp.herokuapp.com/api/v2/users',
                    { 'Authorization': 'Bearer ' + token, 'Content-type' :'application/json' },
                    '{"password": "' + password + '"}', function(status,response){
                        console.assert(status === 204, 'status should be 204');
                        console.assert(response.length === 0, 'response should be empty');
                    });
                });
            }

        });

    })();

    (function () {

        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

    

            authenticateUser(email, password, function(error, token) {
                console.log(' should fail on non-existing user');
                console.assert(error, 'an error should be shown');
                console.assert(token === undefined,'token should be undefined');
                console.assert(error.message === 'wrong crendials', 'error message match should be expected')
            });

    })();

    (function () {
        console.log(' should fail on wrong password');

        var fullname = 'John Doe' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        user = {
            fullname: fullname,
            email: email,
            password: password
        };

        users.push(user);

        var fail;

        try {
            authenticateUser(email, password + '...');
        } catch(error) {
            fail = error;
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of Error');
        console.assert(fail.message, 'wrong credentials');

    })();

    (function() {
        console.log(' should fail on wrong password (2nd version)');
        var email = users[0].email;
        var password = 'my-pass-' + Math.random();

        var fail;

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error;
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError');
        console.assert(fail.message === 'wrong credentials', 'should error message match expected');
    })();

    (function () {
        console.log(' should fail on wrong email');

        var fullname = 'John Doe' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        user = {
            fullname: fullname,
            email: email,
            password: password
        };

        users.push(user);

        var fail;

        try {
            authenticateUser('wrong-' + email, password);
        } catch(error) {
            fail = error;
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of Error');
        console.assert(fail.message, 'wrong credentials');

    })();

    (function() {

        console.log(' should fail on a non existing email');

        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        
        var fail;

        try {
            authenticateUser(email, password);
        }
        catch (error) {
            fail = error;
        }

        
        console.assert(fail instanceof Error, 'should error be defined and a instance of Error');
        console.assert(fail.message === 'wrong credentials', 'should error message match expected error');

    })();

    (function() {
        console.log(' should fail on empty or blank email');

        var email = ['', ' ', '\t', '\n'].random();
        var password = 'pass-' + Math.random();

        var fail;

        try {
            authenticateUser(email, password);
        } catch (error) {
            fail = error;
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError');
        console.assert(fail.message === 'email is empty or blank', 'should error message match expected');
    })();

    (function() {
        console.log(' should fail on an invalid email');

        var email = ['john-doe#mail.com', '@mail.com', 'johh-doe@mail', 'john-doe@'].random();
        var password = 'pass-' + Math.random();

        var fail;

        try {
            authenticateUser(email, password);
        } catch (error) {
            fail = error;
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError');
        console.assert(fail.message === 'invalid e-mail', 'should error message match expected');
    })();

    (function() {

        console.log(' should fail on a non-string email');

        var email = [1, true, null, undefined, {}, [], function() {}, new Date].random();
        var password = 'pass-' + Math.random();

        var fail;

        try {
            authenticateUser(email, password);
        } catch (error) {
            fail = error;
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError');
        console.assert(fail.message === email + ' is not an email', 'should error message match expected');

    })();

    (function() {
        console.log(' should fail on a non-string password');

        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = [1, true, null, undefined, {}, [], function() {}, new Date].random();

        var fail;

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error;
        }

        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === password + ' is not a password', 'should error message match expected')
    })();

    (function() {
        console.log(' should fail on empty or blank password');

        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = ['', ' ', '\t', '\n'].random();

        var fail;

        try {
            authenticateUser(email, password);
        } catch (error) {
            fail = error;
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError');
        console.assert(fail.message === 'password is empty or blank', 'should error message match expected');
    })();


})();