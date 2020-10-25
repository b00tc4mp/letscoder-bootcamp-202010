retrieveAllUsers('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTE4YjJkMjE3YzAwMTc2ZDhiNzIiLCJpYXQiOjE2MDM1NTE1MDAsImV4cCI6MTYwMzU1NTEwMH0.wWjJwHujw1gYlW_EG6oYlJ0093xBnQGHmB0mfC4tVpo', 
function(error, user) {
    console.log('DEMO retrieveAllUsers()')

    if (error) console.error(error)
    else console.log(user)
}) 