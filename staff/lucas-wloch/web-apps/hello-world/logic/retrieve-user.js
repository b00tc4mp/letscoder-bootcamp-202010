function retrieveUser(token,callback){
    if( typeof token !== 'string') throw new TypeError(token + ' is not a full name');
    if(!token.trim().length) throw new Error('full name is empty or blank');
    if(typeof callback !== 'function') throw new TypeError(callback + ' is not a callback');
    
    call('GET','https://b00tc4mp.herokuapp.com/api/v2/users',
    {'Authorization':'Bearer '+`${token}`},'',function(status,response){
        if(status === 200){
            var res = JSON.parse(response);
            callback(null,res);
        } else {
            var res = JSON.parse(response);
            callback(new Error(res.error));
        };
    })
};