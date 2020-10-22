retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxOWUxYTdjYTQ3OTAwMTcxYWM2ZTAiLCJpYXQiOjE2MDMzODc2MzIsImV4cCI6MTYwMzM5MTIzMn0.5nKFJcaqi7xb8dfPRItJmwC4b20164eaNazylQDzSW4', function(error, user){
    console.log('DEMO retrieveUser()')

    if(error) console.error(error)
    else console.log(user)
})