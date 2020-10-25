unregisterUser('123456789','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk1YTZjNTk1ZGUxODAwMTcxYmI0YzUiLCJpYXQiOjE2MDM2NDMyMTIsImV4cCI6MTYwMzY0NjgxMn0.at2S5sUvRPi43Qttni0OgDSETkU6FCDXEKNnkW-NJ30',function(error){
    console.log('DEMO unregisterUser()')
       
    if (!error) console.log('ok, perfect, the user has been deleted! ,)')
    else console.error('ERROR! ' + error.message) 
})