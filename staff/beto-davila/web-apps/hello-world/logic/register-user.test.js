(function() {
    console.log('Test registerUser()');

    (function () {

        var fullname = 'John Doe' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = password;

        registerUser(fullname ,email, password, repassword, function(error) {
            console.log('should succeed on new user');

            console.assert(error === null, 'should error be null');
            
            // auth to get token
            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth', 
            { 'Content-type': 'application/json' }, 
            '{ "username": "' + email + '", "password": "' + password + '"}',
            function(status, response) {
                console.assert(status === 200, 'should status be 200');

                var res = JSON.parse(response);

                var token = res.token;

                // delete recently created user
                call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                {
                    'Authorization': 'Bearer' + token,
                    'Content-type': 'application/json'
                },
                '{ "password": "' + password + '" }',
                function(status, response) {
                    console.assert(status === 204, 'should status be 204');
                    console.assert(response.length === 0, 'should response be empty');
                });
            });
            
        });
    })();

    (function () {

        var fullname = 'John Doe' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = password;


        call('POST', 'https://b00tc4amp.herokuapp.com/api/v2/users',
        { 'Content-type': 'application/json' },
        '{ "fullname": "'+ fullname + '", "username": "'+ email + '", "password": "'+ password + '", "repassword": "'+ repassword + '" }',
        function(status) {
            if (status === 201) {
                debugger
                registerUser(fullname, email, password, repassword, function(error) {
                    console.log(' should fail on already existing user');

                    console.assert(error instanceof Error, 'should error be instanceof Error');
                    console.assert(error.message === 'user with username "' + email + '" already exists', 'should error message match expected');

                    call('POST', 'https://b00tc4amp.herokuapp.com/api/v2/users/auth', 
                    {'Content-type': 'application/json'}, 
                    '{"username": "' + email + '", "password": "' + password + '"}', 
                    function(status, response) {
                        console.assert(status === 200, 'should status be 200');

                        var res = JSON.parse(response);

                        var token = res.token;

                        call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                         {
                             'Authorization': 'Bearer' + token,
                             'Content-type': 'application/json'
                         }, 
                         '{"password": "' + password + '"}', 
                        function(status, response){
                            console.assert(status === 204, 'should status be 204');
                            console.assert(response.length === 0, 'should response be empty');
                        });

                    });
                })
            } else {
                console.error('should not reach this point');
            }
        }
        )
    })();

    (function () {
        console.log(' should fail on a non-string fullname');

        var fullname = [1, true, null, undefined, {}, [], function() {}, new Date].random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = password;

        var fail;

          try {
              registerUser(fullname, email, password, repassword);
          }
          catch (error) {
              fail = error;
          }

          console.assert(fail instanceof TypeError, 'should error be defined and a instance of a TypeError');
          console.assert(fail.message === fullname + ' is not a fullname', 'should error message match expected error');
    })();

    (function () {
        console.log(' should fail on undefined email');

        var fullname = 'John Doe' + Math.random();
        var email = [1 , true, null, undefined, {}, [], function(){}];
        var password = 'pass-' + Math.random();

        var fail;

          try {
              registerUser(fullname, email, password, password);
          }
          catch (error) {
              fail = error;
          }

          console.assert(fail instanceof TypeError, 'should error be defined and an instance of a TyperError');
          console.assert(fail.message === email + ' is not an email', 'should error message match expected error');
    })();

    (function () {
        console.log(' should fail on empty or blank fullname');

        var fullname = ['', ' ', '\t', '\n'].random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        var fail;

          try {
              registerUser(fullname, email, password, password);
          }
          catch (error) {
              fail = error;
          }

          console.assert(fail instanceof Error, 'should error be defined and a instance of a Error');
          console.assert(fail.message === 'fullname is empty or blank', 'should error message match expected error');
    })();

    (function () {
        console.log(' should fail on empty or blank email');

        var fullname = 'John Doe' + Math.random();
        var email = [' ','', '\t', '\n'].random();
        var password = 'pass-' + Math.random();

        var fail;

          try {
              registerUser(fullname, email, password, password);
          }
          catch (error) {
              fail = error;
          }

          console.assert(fail instanceof Error, 'should error be defined and a instance of a Error');
          console.assert(fail.message === 'email is empty or blank', 'should error message match expected error');
    })();


    (function () {
        console.log(' should fail on empty or blank password');

        var fullname = 'John Doe';
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = ['', ' ', '\t', '\n'].random();

        var fail;

          try {
              registerUser(fullname, email, password, password);
          }
          catch (error) {
              fail = error;
          }

          console.assert(fail instanceof Error, 'should error be defined and a instance of a Error');
          console.assert(fail.message === 'password is empty or blank', 'should error message match expected error');
    })();

    (function () {
        console.log(' should fail on empty or blank repeat password');

        var fullname = 'John Doe';
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = ['', ' ', '\t', '\n'].random();

        var fail;

          try {
              registerUser(fullname, email, password, repassword);
          }
          catch (error) {
              fail = error;
          }

          console.assert(fail instanceof Error, 'should error be defined and a instance of a Error');
          console.assert(fail.message === 'repeat password is empty or blank', 'should error message match expected error');
    })();

    (function () {
        console.log(' should fail on undefined password');

        var fullname = 'John Doe' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password;

        var fail;

          try {
              registerUser(fullname, email, password, password);
          }
          catch (error) {
              fail = error;
          }

          console.assert(fail instanceof TypeError, 'should error be defined and a instance of a TyperError');
          console.assert(fail.message === 'undefined is not a password', 'should error message match expected error');
    })();


    (function () {
        console.log(' should fail on a not standard email');

        var fullname = 'John Doe' + Math.random();
        var email = ['johndoe-mail.com','johndoe-mailcom', 'johndoe#mail.com', 'johndoe.com'].random();
        var password = 'pass-' + Math.random();

        var fail;

          try {
              registerUser(fullname, email, password, password);
          }
          catch (error) {
              fail = error;
          }

        console.assert(fail instanceof Error, 'should error be defined and a instance of Error');
        console.assert(fail.message === 'invalid e-mail', 'should error message match expected error');

    })();

    (function () {
        console.log(' should fail on a different password and repassword');

        var fullname = 'John Doe' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = password + '...-123';


        var fail;

          try {
              registerUser(fullname, email, password, repassword);
          }
          catch (error) {
              fail = error;
          }

        console.assert(fail instanceof Error, 'should error be defined and a instance of Error');
        console.assert(fail.message === 'passwords do not match', 'should error message match expected error');

    })();

})();