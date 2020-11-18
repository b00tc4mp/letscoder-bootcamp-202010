call('POST',
'https://b00tc4mp.herokuapp.com/api/v2/users',
{ 'Content-type': 'application/json' },
'{ "username": "145236@41256325.es", "password": "123123123" }',
function (status, response){
    console.log(status,response)

    }

)
//2

call('GET','https://pluscoders.com',{}, function(status, response){console.log(status, response)} )