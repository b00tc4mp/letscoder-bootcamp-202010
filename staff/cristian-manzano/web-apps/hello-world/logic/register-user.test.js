(function () {
    console.log('TEST registerUser()');

    (function () {
        console.log(' should succeed on new user')

        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = password
        
        registerUser(fullname, email, password, repassword, function(error){})
        console.log(' should succeed on new user')

        console.assert(error === null, 'should error be null')
        
    })();

    (function () {
        console.log(' should fail on already existing user')

        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = password

        var user = {
            fullname: fullname,
            email: email,
            password: password
            }

            users.push(user)

            var fail

            try {
                registerUser(fullname, email, password, repassword)
            } catch (error) {
                fail = error
            }

            console.assert(fail, 'should error be defined')
            console.assert(fail.message === 'user already exists', 'should error message match expected')
        })();

        (function () {
            console.log(' should fail on non-string full name')

            var fullname = [1, true, null, undefined, {}, [], function() {}, new Date].random()
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

            console.assert(fail instanceof Error, 'should error be defined and an instance of Error')
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

            console.assert(fail instanceof Error, 'should error be defined as an instance of Error')
            console.assert(fail.message === 'e-mail is empty or blank', 'should error message match expected')
        })();

        (function () {
            console.log(' should fail invalid email')

            var fullname = 'John Doe ' + Math.random()
            var email = ['john-doe#mail.com', '@mail.com', 'john-doe@mail', 'john-doe@'].random()
            var password = 'pass-' + Math.random()
            var repassword = password

            var fail 

            try {
                registerUser(fullname, email, password, repassword)
            } catch (error) {
                fail = error
            }

            console.assert(fail instanceof Error, 'should error be defined as an instance of Error')
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

            console.assert(fail instanceof TypeError, 'should error be defined as an instance of TypeError')
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

            console.assert(fail instanceof Error, 'should error be defined as an instance of Error')
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

            console.assert(fail instanceof TypeError, 'should error be defined as an instance of TypeError')
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

            console.assert(fail instanceof Error, 'should error be defined as an instance of Error')
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
            console.assert(fail instanceof Error, 'should error be defined as an instance of Error')
            console.assert(fail.message === 'passwords don\'t match', 'should error message match expected')
        })();
})();