retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk0MzE3ZWI1ZmFlNTAwMTdmNTM2ODAiLCJpYXQiOjE2MDM2MjQ0NzcsImV4cCI6MTYwMzYyODA3N30.P-nGtsVYl6V6HkBbLON6YgNfmqp8ywMNbsirJV_78c8', function(error, user) {
    console.log('DEMO retriveUser()')

    if (error) console.error(error)
    else console.log(user)
})