registerUser("juan", "juan6@mail.com", "123", "123", function(error){
    if (!error) console.log("ok, perfect, user registred ,)")
    else console.error("ERROR! " + error.message)

})