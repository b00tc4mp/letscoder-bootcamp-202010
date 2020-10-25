registerUser("Rosa Melano", "rosamelano@mail.com", "123123123", "123123123", function(error){
    console.log('DEMO registerUser()')

    if (!error) console.log('OK, user succesfully registered!')
    else console.error('ERROR!' + error.message)
})