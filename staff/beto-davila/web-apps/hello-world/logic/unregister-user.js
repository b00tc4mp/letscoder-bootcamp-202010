function unregisterUser(password, token, callback) { // required to pass a token and a password to unregister the user

    if (typeof token !== 'string') throw new TypeError(token + ' is not a token');
    if (!token.trim().length) throw new Error('token is empty or blank');
    if(typeof callback !== 'function') throw new TypeError(callback + ' is not a callback');
    if (!password.trim().length) throw new Error('password is empty or blank');
    if(typeof password !== 'string') throw new TypeError(password + ' is not a password');

    // var xhr = new XMLHttpRequest;

    // xhr.onreadystatechange = function() {
    //     if (this.readyState == 4);
    //         if (this.status === 204) {
    //             callback();
    //         } else {
    //             var response = JSON.parse(this.responseText);
    //             callback(new Error(response.error));
    //         }
    // }

    // xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users');
    // xhr.setRequestHeader('Content-type', 'application/json');
    // xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    
    // xhr.send('{"password": "' + password + '"}');

    call('DELETE', 
    'https://b00tc4mp.herokuapp.com/api/v2/users/', 
    { 'Content-type': 'application/json' },
    { 'Authorization': 'Bearer ' + token }, 
    '{"password": "' + password + '"}', 
    function(status, response) {
         if (status === 204) {
             callback(null);
         } else {
             var res = JSON.parse(response);
             callback(new Error(res.error));
         }
     });

}
