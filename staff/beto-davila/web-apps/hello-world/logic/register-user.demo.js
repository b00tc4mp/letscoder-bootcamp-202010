registerUser('Manolillo', 'manuel@holayadios.com', '12345', '12345', function(error) {
    console.log('DEMO registerUser()');
    if (!error) {
        console.log('The user was registered!')
    } else {
        console.error('ERROR! ' + error.message);
    }
});