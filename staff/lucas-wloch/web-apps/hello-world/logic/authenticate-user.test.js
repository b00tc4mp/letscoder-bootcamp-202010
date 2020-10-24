(function(){
    console.log('TEST authenticateUser()');
    
    (function(){
        
        console.log(' should succed on existing user');
    
        
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        call('POST','https://b00tc4mp.herokuapp.com/api/v2/users',
        {'Content-type':'application/json'},
        '{"username": "'+email+'", "password": "'+password+'"}',function(status,response){
            console.assert(status === 201, 'status should be 201');
            if(status === 201){
                authenticater(email,password,function(error,token){
                    
                })
                call('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                {'Content-type':'application/json'},
                '{"username": "'+email+'", "password": "'+password+'"}',function(status,response){
                    console.assert(status === 200, 'status should be 200');
                    var res = JSON.parse(response);
                    var token = res.token;
                    call('DELETE','https://b00tc4mp.herokuapp.com/api/v2/users',
                    {'Authorization':'Bearer '+token,'Content-type':'application/json'},
                    '{"password": "'+password+'"}', function(status,response){
                        console.assert(status === 204, 'status should be 204');
                        console.assert(response.length === 0, 'response should be empty');
                    })
                })
            }
            
        })
        
        
        
    
        var fail;
    
        try{
            authenticateUser(email,password);
        } catch (error) {
            fail = error;
        };
        
        console.assert(!fail, 'shouldn\'t fail on authenticate');
    })();
    
    (function(){
        console.log(' should fail on non-existing user');
    
        
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
    
        var fail;
    
        try{
            authenticateUser(email,password);
        } catch (error) {
            fail = error;
        };
        
        console.assert(fail instanceof Error,'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'wrong credentials','error messages should match');
    })();
    
    (function(){
        console.log(' should fail on wrong password');
    
        
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
    
        var fail;
    
        try{
            authenticateUser(email,'wrong-'+ password);
        } catch (error) {
            fail = error;
        };
        
        console.assert(fail instanceof Error,'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'wrong credentials','error messages should match');
    })();
    
    (function(){
        console.log(' should fail on wrong email');
    
        
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
    
        var fail;
    
        try{
            authenticateUser('wrong-'+ email,password);
        } catch (error) {
            fail = error;
        };
        
        console.assert(fail instanceof Error,'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'wrong credentials','error messages should match');
    })();
    
    (function(){
        console.log(' should fail on non-string email');
    
        
        var email = [5,false,undefined,null,{},[],function(){},new Date].random();
        var password = 'pass-' + Math.random();
        
    
        var fail;
    
        try{
            authenticateUser(email,password);
        } catch (error) {
            fail = error;
        };
    
        console.assert(fail instanceof TypeError, 'fail should be defined and be an instance of TypeError');
        console.assert(fail.message === email + ' is not an e-mail', 'error message should match expected');
    })();
    
    (function(){
        console.log(' should fail on empty or blank email');
    
        
        var email = ['',' ','\t','\n'].random();
        var password = 'pass-' + Math.random();
        
        
        var fail;
        
        try{
            authenticateUser(email,password);
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
        
    
        var fail;
    
        try{
            authenticateUser(email,password);
        } catch (error){
            fail = error;
        };
    
        console.assert(fail instanceof Error,' fail should be defined and be an instance of Error');
        console.assert(fail.message === 'invalid e-mail','error message should match expected');
    })();
    
    (function(){
        console.log(' should fail on non-string password');
    
        
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = [5,false,undefined,null,{},[],function(){},new Date].random();
        
    
        var fail;
    
        try{
            authenticateUser(email,password);
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
            authenticateUser(email,password);
        } catch (error) {
            fail = error;
        };
    
        console.assert(fail instanceof Error, 'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'password is empty or blank', 'error message should match expected');
    })();
})();