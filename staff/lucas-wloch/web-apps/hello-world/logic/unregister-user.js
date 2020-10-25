function unRegisterUser(token,password,callback){
    if( typeof token !== 'string') throw new TypeError(token + ' is not a token');
    if(!token.trim().length) throw new Error('token is empty or blank');
    if( typeof password !== 'string') throw new TypeError(password + ' is not a password');
    if(!password.trim().length) throw new Error('password is empty or blank');
    if(typeof callback !== 'function') throw new TypeError(callback + ' is not a callback');

    call('DELETE','https://b00tc4mp.herokuapp.com/api/v2/users',
    {'Authorization': 'Bearer ' + token, 'Content-type':'application/json'},
    '{"password": "' + password + '"}', function(status,response){
        if (status === 204) {
            callback(null);
        } else {
            var res = JSON.parse(response);
            callback(new Error(res.error));
        };
    })
}