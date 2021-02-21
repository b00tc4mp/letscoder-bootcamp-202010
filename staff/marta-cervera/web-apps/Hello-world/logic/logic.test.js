(function () {
    console.log('TEST registerUser()');

    (function () {
        console.log(' should succeed on new user')

        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = password

        registerUser(fullname, email, password, repassword)

        var user = users.find(function (user) { return user.email === email })

        console.assert(user, 'new user should be registered')
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

        var fullname = [1, true, null, undefined, {}, [], function() {}, new Date].random();
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()
        var repassword = password

        var fail;

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

    // TODO implement more unit test cases
})();

(function () {
    console.log('TEST authenticateUser()');

    (function(){
        console.log("should not fail on authentication")

        var fullname= "John Doe" + Math.random()
        var email= "johndoe-" + Math.random()
        var password = "pass-" + Math.random()
        var repassword= password

        var user = {
            fullname: fullname,
            email: email,
            password: password
        }

        var fail
        try {
            authenticateUser(email,password)
        } catch (error) {
            fail= error
        }

        if (!fail, "should not fail on autentication")
       
    

})();