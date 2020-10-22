authenticateUser('ti@gre.com', '123', function(error,token){
if(!error) {console.log('ok, user authenticated')}
else console.error('token')
})