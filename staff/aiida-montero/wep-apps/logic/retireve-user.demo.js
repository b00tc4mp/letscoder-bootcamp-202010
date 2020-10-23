retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxZTU0NDJjZGE0ZjAwMTcwMGUxNDciLCJpYXQiOjE2MDMzOTY5MzgsImV4cCI6MTYwMzQwMDUzOH0.vQioZCHfwwsY0uX2ufCXxtYdDVerpWzt8_IzATfvNKA', function(error, user) {
    console.log('DEMO retriveUser()')

    if (error) console.error(error)
    else console.log(user)
})