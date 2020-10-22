registerUser("fullname", "email@email.es", "123", "123", function(error){
    if (!error) alert("ok, user registered!")
    else alert('ERROR! ' + error.message);
})
