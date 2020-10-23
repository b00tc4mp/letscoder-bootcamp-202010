authenticateUser('Ga To','123', function(error,token){
    if(error) console.log(error)
    else console.log(token)

})

authenticateUser('Toma To','456', function(error,token){
    if(error) console.log(error)
    else console.log(token)
})