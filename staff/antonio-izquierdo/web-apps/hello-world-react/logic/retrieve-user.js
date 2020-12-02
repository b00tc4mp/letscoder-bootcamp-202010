function retrieveUser(token,callback){
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')
    
    if (!token.trim().length) throw new Error('token is empty or blank')
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
    
    call('GET', 
    'https://b00tc4mp.herokuapp.com/api/v2/users/',
    { 'Authorization': 'Bearer ' + token },
    '', 
    function (status, response) {
        var res = JSON.parse(response)
        if (status === 200){ 
            callback(null, res)
            
        }else {
            callback(new Error(res.error))
            }
        }
    )}     