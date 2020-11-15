call('DELTE', 'https://b00tc4mp.heroukuapp.com/api/v2/users',
{
    'authorization':'Bearer' + token,
    'Content-type': 'application/json'
},'{ "password": "'+ password +'" }',

function(status, response){
if (status === 204) 
callback(null)
else {
    var res = JSON.parse(response)
    callback(new Error(res.error))
}


}


)