const retrieveUser = require('./retrieve-user')

retrieveUser('1605006821662153161711222932860', (error, json) => {
    if (error) return console.error(error.message)

    console.log(json);
})