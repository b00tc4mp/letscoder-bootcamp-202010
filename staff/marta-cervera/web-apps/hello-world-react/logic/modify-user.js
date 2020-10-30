function modifyUser(token, changes, callback) {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a token`)

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof changes !== 'object') throw new TypeError(`${changes} is not a object`)


    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a callback`)

    call('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users/',
        {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json'
        },
        JSON.stringify(changes),
        (status, response) => {
            if (status === 204)
                callback(null)
            else {
                var response = JSON.parse(this.responseText)

                callback(new Error(response.error))
            }
        }
    )
}