registerUser('An dres55', 'an@dres55.com', '123', '123', function(error) {
    console.log('DEMO register-user')

    if (!error) console.log('Nice, user registered!')
    else console.error('ERROR! ' + error.message)
})