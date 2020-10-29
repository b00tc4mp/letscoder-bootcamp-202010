retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk0MzIyOGI1ZmFlNTAwMTdmNTM2ODIiLCJpYXQiOjE2MDM2MjQ0MDQsImV4cCI6MTYwMzYyODAwNH0.IfgB-z0O6mw4dWGiHdAw8lyRtzqbC43VPLsXDG6ObRQ', function(error, user) {
    console.log('DEMO retrieveUser()')

    if (error) console.error(error)
    else console.log(user)
}) 