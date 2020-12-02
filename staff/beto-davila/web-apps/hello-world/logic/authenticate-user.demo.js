authenticateUser('ga@to.com', '1234', function(error, token) {
    console.log('DEMO authenticateUser()');
    if (error) console.log(error);
    else console.log(token);
})