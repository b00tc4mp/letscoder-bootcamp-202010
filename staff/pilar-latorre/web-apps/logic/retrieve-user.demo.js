retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxOWUxYTdjYTQ3OTAwMTcxYWM2ZTAiLCJpYXQiOjE2MDM2MjQ0MDksImV4cCI6MTYwMzYyODAwOX0.J7lQy60NWB51lGzmKkRhNtUqPsJF6AAfPVzPKEtBFrE', function(error, user){
    console.log('DEMO retrieveUser()')

    if(error) console.error(error)
    else console.log(user)
})