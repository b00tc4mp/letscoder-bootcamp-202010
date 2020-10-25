function modifyUser(token,callback,update){
    if( typeof token !== 'string') throw new TypeError(token + ' is not a token');
    if(!token.trim().length) throw new Error('token is empty or blank');
    if(typeof callback !== 'function') throw new TypeError(callback + ' is not a callback');
    // if( typeof update !== 'string') throw new TypeError(update + ' is not a update');
    // if(!update.trim().length) throw new Error('update is empty or blank');

    call('PATCH','https://b00tc4mp.herokuapp.com/api/v2/users',
    {'Authorization':'Bearer '+ token, 'Content-type':'application/json' },update,
    function(status,response){
        if (status === 204){
            callback(null);
        } else {
            var res = JSON.parse(response);
            callback(new error(res.error));
        };  
    })
}



