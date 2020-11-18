(function() {
    console.log('TEST registerUser(');

    (function () {
        call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users', '{"username": "' + mail + '", "password": "' + password + '"}', {'Content-type': 'application/json'}, function (status, response){
            console.log(' should call register user')

            console.assert(status === 201, 'should register user')
            console.assert(response.length === 0, 'should response be empty')
    
    }
)

    })();

})();