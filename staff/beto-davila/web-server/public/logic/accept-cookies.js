const acceptCookies = callback => {

    if (typeof callback !== 'function') throw new TypeError (`${callback} is not a function`)

        call('POST','http://localhost:3000/api/accept-cookies', {}, '', (status, response) => {
            if (status !== 204) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            callback(null)
        })
}