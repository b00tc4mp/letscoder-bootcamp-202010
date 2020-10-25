retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk1ZDA4YTk1ZGUxODAwMTcxYmJhMWUiLCJpYXQiOjE2MDM2NTM3NzgsImV4cCI6MTYwMzY1NzM3OH0.ufypqPcBu1PuMUNWspgQ0rnc0wA5_B4BHEh7WK-kuQo', function(error, user) {
    console.log('DEMO retriveUser()')

    if (error) console.error(error)
    else console.log(user)
})