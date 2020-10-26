authenticateUser("juan6@mail.com", "123", function(token, error){
    if (error) console.error(error)
    else console.log(token)
})