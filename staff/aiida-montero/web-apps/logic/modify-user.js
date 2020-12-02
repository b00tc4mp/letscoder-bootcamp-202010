function modifyUser(changes, token, callback) {

    if (typeof changes !== 'object') throw new TypeError('changes:' + changes + ' is not a object')

    if (typeof token !== 'string') throw new TypeError('token:' + token + 'is not a string')

    if (typeof callback !== 'function') throw new TypeError(callback + 'is not a callback')
    var xhr = new XMLHttpRequest


    call('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users/',
        {
            'Authorization': 'Bearer ' + token,
            'Content-type': 'application/json'
        },
        '(JSON.stringify(changes))',
        function (status, response) {
            var response = JSON.parse(this.responseText)
            if (status === 204)
                callback()
            else {

                callback(new Error(res.error))
            }
        }

    )
}