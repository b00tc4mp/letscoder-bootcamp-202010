registerUser('Lo Ro', 'lo@ro.com', '123', '123', function(error) {
    console.log('DEMO registerUser()')
    
    if (!error) console.log('ok, perfect, user registered! ,)')
    else console.error('ERROR! ' + error.message) 
})