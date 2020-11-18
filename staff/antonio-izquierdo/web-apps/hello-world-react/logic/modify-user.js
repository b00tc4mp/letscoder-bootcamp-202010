function modifyUser(update,token,callback) {
    if (typeof update !== "string") throw new TypeError("data is not a string")
    if (update.length === 0) throw new TypeError("update is blank or empty")
    if (typeof token !== "string") throw new TypeError("token is not a string")
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')


    call('PATCH', 
    'https://b00tc4mp.herokuapp.com/api/v2/users/',
    { 'Authorization': 'Bearer ' + token, 'Content-type': 'application/json' },
    update, 
    function (status, response) {
        if (status === 204){ 
            callback(null)
        }else {
            var res = JSON.parse(response)
            callback(new Error(res.error))
            }
        }
    )} 