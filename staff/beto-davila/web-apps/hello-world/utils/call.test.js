(function() {
    console.log('Test call()');

    (function() {

        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        call('POST', 
'https://b00tc4mp.herokuapp.com/api/v2/users', 
'{"username": "' + email + '", "password": "' + password + '"}', 
{'Content-type': 'application/json'}, 
function(status, response) {
    console.log(' should call success on calling API')

    console.assert(status === 201, 'should register the user');
    console.assert(response.length === 0, 'should response be empty');

});
    })();

    

})();