unregisterUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxZTQ0YjJjZGE0ZjAwMTcwMGUxNDYiLCJpYXQiOjE2MDMzOTY2ODUsImV4cCI6MTYwMzQwMDI4NX0.DjhwI8rd84NFVoIVq4lfI_LAHi9oD2_ul4WkYwtYfTU','123', function(error){
    console.log('DEMO unregisterUser()')

    if(error)console.error(error)
    else console.log('user deleted')
})