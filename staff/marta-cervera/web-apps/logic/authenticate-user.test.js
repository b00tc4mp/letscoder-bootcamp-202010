(function () {
    console.log('TEST authenticateUser()');

    (function () {
        console.log(' should succeed on existing user')

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
            authenticateUser(email, password)
        } catch(error) {
            fail = error
        }

        console.assert(!fail, 'should not fail on authenticate')
    })();


})();