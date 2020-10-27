authenticateUser('ga@to.com','123', function(error,token){
    if(error) console.log(error)
    else console.log(token)

})

authenticateUser('toma@to.com','456', function(error,token){
    if(error) console.log(error)
    else console.log(token)
})