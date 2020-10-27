call('POST',
    'https://b00tc4mp.herokuapp.com/api/v2/users',
    { 'Content-type': 'application/json' },
    '{ "username": "pe@rro.com", "password": "123123123" }',
    function (status, response) {
        debugger
        console.log(status, response)
    }
)

// 2

call('GET', 'https://pluscoders.com', {}, '', function(status, response) { console.log(status, response) }) 
