retrieveAllUsers('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTE5ZTJkMjE3YzAwMTc2ZDhiNzgiLCJpYXQiOjE2MDM1NjYyMjksImV4cCI6MTYwMzU2OTgyOX0.IALETlnjd_eGTqv9_YsQUDDmmYdjtMhz02DSo2f3tvY', 
function(error,user) {
    console.log("DEMO retrieveAllUser()")

    if(error) console.error(error)
    else console.log(user)
})