registerUser('Aves Truz', 'aves@truz.com', '123', '123', function(error){
    if (!error) console.log('ok, perfect, user registered! ,) ');

    else console.error('Error! ' + error.message);
});