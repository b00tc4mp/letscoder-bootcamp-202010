(function (){

    console.log('Test authenticateUser()');

    (function () {
        console.log(' should succeed on existing user');

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
            authenticateUser(email, password);
        } catch(error) {
            fail = error;
        }

        console.assert(!fail, 'the user should log in properly');

    })();

    (function () {
        console.log(' should fail on non-existing user');

        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        var fail;

        try {
            authenticateUser(email, password);
        } catch(error) {
            fail = error;
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of Error');
        console.assert(fail.message, 'wrong credentials');

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