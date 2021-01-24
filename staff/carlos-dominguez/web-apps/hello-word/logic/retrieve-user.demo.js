retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxOWUxYTdjYTQ3OTAwMTcxYWM2ZTAiLCJpYXQiOjE2MDMzODAwNjgsImV4cCI6MTYwMzM4MzY2OH0.FNAZAZLCrriw_5kX4cI6cBgeuBzc2gkwcoGyR09wx0g', function(error, user) {
    console.log('DEMO retriveUser()')
    if (error) console.error(error)
    else console.log(user)
})