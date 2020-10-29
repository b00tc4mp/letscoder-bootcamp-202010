modifyUser('{"city": "Nueva York"}', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk0MzIyOGI1ZmFlNTAwMTdmNTM2ODIiLCJpYXQiOjE2MDM2MjU0NDEsImV4cCI6MTYwMzYyOTA0MX0.8fSv0YyPetn8Rn4CqjfpSd2zYGAS6M51RipTJuLJzTw', 
function(error){
    if (!error) console.log('OK, user succesfully updated!')
    else console.error('ERROR!' + error.message)
})