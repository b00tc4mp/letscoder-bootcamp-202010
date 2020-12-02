call('POST', 
'https://b00tc4mp.herokuapp.com/api/v2/users', 
'{ "username": "lo@bo.com", "password": "123123123" }', 
{'Content-type': 'application/json'}, 
function(status, response) {
    console.log(status, response);
});