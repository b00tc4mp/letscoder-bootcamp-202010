(function() {
    console.log('Test registerUser()');

    (function () {
        console.log(' should succeed a new user');

        var fullname = 'John Doe' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        registerUser(fullname ,email, password, repassword);

        var user = users.find(function(user) { return user.email === email });

        console.assert(user, 'new user should be registered');

    })();

    (function () {
        console.log(' should fail on already existing user');

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
              registerUser(fullname, email, password, repassword);
          }
          catch (error) {
              fail = error;
          }

          console.assert(fail, 'should error be defined');
          console.assert(fail.message === 'user already exists', 'should error message match expected error');
    })();

    //TODO

})();

(function() {
    console.log('Test authenticateUser()');

    // TODO
})();