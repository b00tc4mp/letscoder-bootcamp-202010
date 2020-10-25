retrieveAllUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk0OWQ4MWI1ZmFlNTAwMTdmNTM3MDYiLCJpYXQiOjE2MDM2Mzg1NDcsImV4cCI6MTYwMzY0MjE0N30.JGF6yMZBxmRuA-4nXBsNHU6-e9XnksBjjcQOlJam3gk', function (error, user) {
    console.log('DEMO retriveAllUser()')

    if (error) console.error(error)
    else console.log(user)
})