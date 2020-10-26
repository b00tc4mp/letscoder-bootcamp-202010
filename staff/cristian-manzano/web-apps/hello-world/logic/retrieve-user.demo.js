retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxOTNkNDdjYTQ3OTAwMTcxYWM2ZGQiLCJpYXQiOjE2MDM0MzkyMDYsImV4cCI6MTYwMzQ0MjgwNn0.xVKQn6exC-U9uO3bC7-PUp16RmoGGnJvjnIAKOWz51o', function(error, user){
    console.log('DEMO retrieveUser()')

    if (error) console.error(error)
    else console.log(user)

})