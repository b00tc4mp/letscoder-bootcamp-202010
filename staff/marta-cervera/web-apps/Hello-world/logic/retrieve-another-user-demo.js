
retrieveAnotherUser('5f9151872d217c00176d8b71',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxZTU0NDJjZGE0ZjAwMTcwMGUxNDciLCJpYXQiOjE2MDM1NjYyMDcsImV4cCI6MTYwMzU2OTgwN30.saTtExuMcIPtjYWgkDPAxjcT7KRODDXZGQCtjj0wNBY',
function(error,user){
console.log('DEMO retriveUserAnother()')

    if (error) console.error(error)
    else console.log(user)
    
})