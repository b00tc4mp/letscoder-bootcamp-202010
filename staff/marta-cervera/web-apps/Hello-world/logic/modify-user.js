function modifyUser(data,token,callback) {

    if (typeof data !== "string") throw new TypeError("data is not a string")

    if(typeof token !== "string") throw new TypeError("token is not a string")

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    
 var xhr = new XMLHttpRequest

 
 
 call('PATCH',
 'https://b00tc4mp.herokuapp.com/api/v2/users',
 {'Authorization': 'Bearer ' + token,
  'Content-type':'application/json' },
 data,
 function(status,response) {
     if (status === 204){
     callback(null)
 } else {

    var res= JSON.parse(response)
    callback(new Error(res.error))
}
}
)