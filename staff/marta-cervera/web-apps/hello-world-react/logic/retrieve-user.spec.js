function retrieveUser(token, callback) {
    if (typeof token !== 'string') throw new TypeError(token + 'is not a real token')

    if (!token.trim().length) throw new Error("token is empty or blank")

    if (typeof callback !== "function") throw new Error("callback is not a function")


    call('GET',
        'https://b00tc4mp.herokuapp.com/api/v2/users',
        { 'authorization': 'Bearer ' + token },
        '',
        function (status, response) {

            var resp = JSON.parse(response)
            if (status === 200) {               

                callback(undefined, response)

            } else {

                callback(new Error(resp.error))
            }
        }


    )
}