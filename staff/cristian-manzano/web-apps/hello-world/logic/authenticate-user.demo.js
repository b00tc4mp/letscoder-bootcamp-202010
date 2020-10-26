var token = authenticateUser('an@dres55.com', '123', function(error, token){
    if (error) console.log(error)
        else {console.log(token)
        }
})