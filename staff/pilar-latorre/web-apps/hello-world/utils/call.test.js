(function(){
    console.log('TEST call()');

    (function(){
        var email = 'jonhdoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random() 

        call('POST',
            'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "username": "' + email + '", "password": "' + password + '" }',
            function (status, response) {
                console.log(' should call success on calling API')

                console.assert(status === 201, 'should register user')
                console.assert(response.length === 0, 'should response be empty')
            }
    }

    })();




})();