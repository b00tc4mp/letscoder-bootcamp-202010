retrieveAnotherUser('5f9151bc2d217c00176d8b7c','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxOWUxYTdjYTQ3OTAwMTcxYWM2ZTAiLCJpYXQiOjE2MDM2NDIxOTQsImV4cCI6MTYwMzY0NTc5NH0.TjNTa-dRRzES9mY6M9abUFF5AKUZ7PmOIGc2XMuQlfY', function(error, user){
    console.log('DEMO retrieveAnotherUser()')

    if(error) console.error(error)
    else console.log(user)
})