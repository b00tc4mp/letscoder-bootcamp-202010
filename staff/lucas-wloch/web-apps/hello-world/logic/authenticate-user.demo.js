authenticateUser('aves@truz.com','123',function(error, token){
    console.log('Demo authenticateUser()')

    if(error) {
        console.error(error)
    }else {
        console.log(token);}
    
});
