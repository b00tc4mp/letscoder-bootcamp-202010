modifyUser({"hair": "black"},'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxZTU0NDJjZGE0ZjAwMTcwMGUxNDciLCJpYXQiOjE2MDMzOTcyMTMsImV4cCI6MTYwMzQwMDgxM30.DRPMxeSR8BrIhdh2sK9YnuM8LUagRomJkSVRx7q5Zts',function(error) {
console.log ('DEMO modifyuser()')
if(!error)console.log('add changes')
else console.error ('ERROR!'+ error.message)

})
