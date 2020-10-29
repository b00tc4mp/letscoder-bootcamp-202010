function retrieveAllUsers(token,callback){
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')
    
    if (!token.trim().length) throw new Error('token is empty or blank')
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
    
    call('GET', 
'https://b00tc4mp.herokuapp.com/api/v2/users/all',
{ 'Authorization': 'Bearer ' + token },
'', 
function (status, response) {
    if (status === 200){ 
        var resText = JSON.parse(response)
        callback(null, resText)
        var res = JSON.parse(response)
    }else {
        callback(new Error(res.error))
        }
    }
)} 


