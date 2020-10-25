retrieveAllUsers('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk0OWRhY2I1ZmFlNTAwMTdmNTM3MDciLCJpYXQiOjE2MDM2MDc1NDksImV4cCI6MTYwMzYxMTE0OX0.OVOmO3H3yjIG-Z5Pgk4hDKG4MERCMdEX4RVze4MQPjs', function(error, user) {
    console.log('DEMO retriveAllUser()')

    if (error) console.error(error)
    else console.log(user)
})