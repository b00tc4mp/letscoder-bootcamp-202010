function modifyUser(token,changes,callback){
    if( typeof token !== 'string') throw new TypeError(token + ' is not a token');
    if(!token.trim().length) throw new Error('token is empty or blank');
    if(typeof changes !== 'object') throw new TypeError(changes + ' is not an object');
    if(typeof callback !== 'function') throw new TypeError(callback + ' is not a callback');

    call('PATCH','https://b00tc4mp.herokuapp.com/api/v2/users',
    {'Authorization':'Bearer '+ token, 'Content-type':'application/json' },JSON.stringify(changes),
    function(status,response){
        if (status === 204){
            callback(null);
        } else {
            var res = JSON.parse(this.responseText);
            callback(new error(res.error));
        };  
    })
}



