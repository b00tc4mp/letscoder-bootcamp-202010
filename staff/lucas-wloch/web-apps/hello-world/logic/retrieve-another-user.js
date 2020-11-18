function retrieveAnotherUser(token,id,callback){
    if( typeof token !== 'string') throw new TypeError(token + ' is not a token');
    if(!token.trim().length) throw new Error('token is empty or blank');
    if( typeof id !== 'string') throw new TypeError(id + ' is not a id');
    if(!id.trim().length) throw new Error('id is empty or blank');
    if(typeof callback !== 'function') throw new TypeError(callback + ' is not a callback');
    
    call('GET','https://b00tc4mp.herokuapp.com/api/v2/users/'+ id,
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