authenticateUser('rosamelano@mail.com', '123123123', function(error, token) {
    console.log('DEMO authenticateUser()')

    if (error) console.error(error)
    else console.log(token)
}) 