function  modifyUser(token, update, callback) {

    if (!token.trim().length) throw new Error('token is empty or blank');
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token');
    if (typeof update !== 'object') throw new TypeError(update + ' is not an object');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback');

    call('PATCH', 
    'https://b00tc4mp.herokuapp.com/api/v2/users/', 
    { 'Content-type': 'application/json' , 'Authorization': 'Bearer ' + token },
    JSON.stringify(update), 
    function(status, response) {
            if (status === 204) {
                callback(null);
            } else {
                var res = JSON.parse(response);
                callback(new Error(res.error));
            }
        });
}