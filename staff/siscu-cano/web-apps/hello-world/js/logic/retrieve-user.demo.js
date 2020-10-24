retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkzZmMwNTAxYmZkNjAwMTc3ZTI0ZTAiLCJpYXQiOjE2MDM1MzU0NjYsImV4cCI6MTYwMzUzOTA2Nn0.xWOI3I038xUuaoLD-FP3RQAJTCWCQRjMpmkEQak7yZI', function(error, user) {
    console.log('DEMO retriveUser()')

    if (error) console.error(error)
    else console.log(user)
})