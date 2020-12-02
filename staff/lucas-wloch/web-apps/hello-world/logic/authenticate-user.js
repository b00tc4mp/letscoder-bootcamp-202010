function authenticateUser(email,password, callback){
    if( typeof email !== 'string') throw new TypeError(email + ' is not an email');
    if(!email.trim().length) throw new Error('e-mail is empty or blank');
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail');
    if( typeof password !== 'string') throw new TypeError(password + ' is not a password');
    if(!password.trim().length) throw new Error('password is empty or blank');
    if (typeof callback !== 'function') throw new Error(callback + ' is not a callback');
    
    call('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth',{'Content-type':'application/json'},
    '{"username": "' + email + '", "password": "' + password + '"}',function(status,response){
        if (status === 200){
            var res = JSON.parse(response);
            callback(null,res.token);
        }else{
            var res = JSON.parse(response);
            callback(new Error(res.error));  
        }
    });
}

