authenticateUser("juan6@mail.com", "123", function(error, token){
    if (error) console.error(error)
    else console.log(token)

})