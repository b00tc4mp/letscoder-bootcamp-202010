(function() {
    console.log('TEST registerUser()');

    (function() {
        console.log(' should succeed on new user')

        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        registerUser(fullname, email, password, password)

        var user = users.find(function(user) { return user.email === email })

        console.assert(user, 'new user should be registered')
    })();

    (function() {
        console.log(' should fail on already existing user')

        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        var user = {
            fullname: fullname,
            email: email,
            password: password
        }

        users.push(user)

        var fail

        try {
            registerUser(fullname, email, password, password)
        } catch(error) {
            fail = error
        }

        console.assert(fail, 'should error be defined')
        console.assert(fail.message === 'user already exists', 'should error message match expected')
    })();

    // TODO implement more unit test cases
})();

(function() {
    console.log('TEST authenticateUser()');

    // TODO implement unit test cases
})();