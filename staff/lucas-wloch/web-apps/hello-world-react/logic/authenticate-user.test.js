(function(){
    console.log('TEST authenticateUser()');
    
    (function(){
        
        
        
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        
        call('POST','https://b00tc4mp.herokuapp.com/api/v2/users',
        {'Content-type':'application/json'},
        '{"username": "'+email+'", "password": "'+password+'"}',function(status,response){
            console.assert(status === 201, 'status should be 201');
            if(status === 201){
                authenticateUser(email,password,function(error,token){
                    console.log(' should succed on existing user');
                    console.assert(error === null, 'error should be null');
                    console.assert(token !== undefined,'token should be defined');
                    console.assert(token.length !== 0, 'token shouldnt be empty');
                    var token = token;
                    call('DELETE','https://b00tc4mp.herokuapp.com/api/v2/users',
                    {'Authorization':'Bearer '+token,'Content-type':'application/json'},
                    '{"password": "'+password+'"}', function(status,response){
                        console.assert(status === 204, 'status should be 204');
                        console.assert(response.length === 0, 'response should be empty');
                    })
                })
            }
            
        })
    })();
    
    (function(){
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        
        authenticateUser(email,password,function(error,token){
            
            console.log(' should fail on non-existing user');
            console.assert(error, 'there should be an error');
            console.assert(token === undefined,'token should be undefined');
            console.assert(error.message === 'username and/or password wrong', 'error messages should match')
           
            
        })
    
    })();
    
    (function(){
        
        
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        
        
        try{
            authenticateUser(email,'wrong-'+ password,function(error,token){
                console.log(' should fail on wrong password');
                console.assert(error !== undefined,'error should be defined');
                console.assert(error.message === 'username and/or password wrong', 'error messages should match');
                console.assert(token === undefined, 'token should be undefined');
            });
        } catch (error){}
    })();
    
    (function(){
        
        
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        
        
        
        try{
            authenticateUser('wrong-'+ email,password,function(error,token){
                console.log(' should fail on wrong email');
                console.assert(error !== undefined,'error should be defined');
                console.assert(error.message === 'username and/or password wrong', 'error messages should match');
                console.assert(token === undefined, 'token should be undefined');
                
            });
        } catch (error){}
    })();
    
    (function(){
        
        console.log(' should fail on non-string email');
        
        var email = [5,false,undefined,null,{},[],function(){},new Date].random();
        var password = 'pass-' + Math.random();
        
        
        var fail;
        
        try{
            authenticateUser(email,password,function(){});
        } catch (error) {
            fail = error;
        };
    
        console.assert(fail instanceof TypeError, 'fail should be defined and be an instance of typeError');
        console.assert(fail.message === email + ' is not an email', 'error message should match expected');
    
        
    })();
    
    (function(){
        
        console.log(' should fail on empty or blank email');
        
        var email = ['',' ','\t','\n'].random();
        var password = 'pass-' + Math.random();
        
        
        
        
        try{
            authenticateUser(email,password,function(){});
        } catch (error) {
            fail = error;
        };
    
        console.assert(fail instanceof Error, 'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'e-mail is empty or blank', 'error message should match expected');
    
        
    })();
    
    (function(){
        console.log(' should fail on invalid email');
        
        var email = ['john-doe#mail.com','@mail.com','john-doe@mail','john-doe@','john@doe@mail.com'].random();
        var password = 'pass-' + Math.random();
    
        try{
            authenticateUser(email,password,function(){});
        } catch (error) {
            fail = error;
        };
    
        console.assert(fail instanceof Error, 'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'invalid e-mail', 'error message should match expected');
    
    })();
    
    (function(){
        console.log(' should fail on non-string password');
    
        
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = [5,false,undefined,null,{},[],function(){},new Date].random();
        
    
        var fail;
    
        try{
            authenticateUser(email,password,function(){});
        } catch (error) {
            fail = error;
        };
    
        console.assert(fail instanceof TypeError, 'fail should be defined and be an instance of TypeError');
        console.assert(fail.message === password + ' is not a password', 'error message should match expected');
    })();
    
    (function(){
        console.log(' should fail on empty or blank password');
    
        
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = ['',' ','\t','\n'].random();
        
        
        var fail;
        
        try{
            authenticateUser(email,password,function(){});
        } catch (error) {
            fail = error;
        };
    
        console.assert(fail instanceof Error, 'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'password is empty or blank', 'error message should match expected');
    })();
})();