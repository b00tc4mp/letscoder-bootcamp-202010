registerUser('Pi Gre', 'pi@gre.com', '123', '123', function(error) {
    console.log('DEMO registerUser()')

    if (!error) console.log('ok, perfect, user registered! ,)')
    else console.error('ERROR! ' + error.message) 
})