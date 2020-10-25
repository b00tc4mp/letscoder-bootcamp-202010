(function(){
    console.log('TEST registerUser()');

    (function(){
        
        var fullname = 'John Doe ' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        
        registerUser(fullname,email,password,password,function(error){
            console.log(' should succeed on adding new user');
            console.assert(error === null, 'error should be null');

            call('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth',
            {"Content-type": "application/json"},'{"username": "'+email+'", "password": "'+password+'"}',
            function(status,response){
                console.assert(status === 200, 'status should be 200');

                var res = JSON.parse(response);
                var token = res.token;
                 call('DELETE','https://b00tc4mp.herokuapp.com/api/v2/users',
                 {'Authorization':'Bearer '+token, 'Content-type': 'application/json'},
                 '{"password": "'+password+'"}',function(status,response){
                     console.assert(status === 204, 'status should be 204');
                     console.assert(response.length === 0 , 'response should be empty')
                 })
            })
        });
    })();
    
    (function(){
        
        var fullname = 'John Doe ' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = password
        
        call('POST','https://b00tc4mp.herokuapp.com/api/v2/users',
        {'Content-type': 'application/json'},
        '{"fullname": "'+fullname+'", "username": "'+email+'","password": "'+password+'"}',
        function(status,response){
            console.assert(status === 201,'status should be 201');
                registerUser(fullname,email,password,repassword,function(error){
                    console.log(' should fail on already existing user');
                    console.assert(error instanceof Error, 'error should be an instance of error');
                    console.assert(error.message === 'user with username "' + email + '" already exists', 'error message should match expected');
                    
                    call('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                    {'Content-type':'application/json'},
                    '{"username": "'+email+'", "password": "'+password+'"}',function(status,response){
                        console.assert(status === 200, 'status should be 200');
                        var res = JSON.parse(response);
                        var token = res.token;
                        call('DELETE','https://b00tc4mp.herokuapp.com/api/v2/users',
                        {'Authorization':'Bearer '+token, 'Content-type':'application/json'},
                        '{"password": "'+password+'"}', function(status,response){
                            console.assert(status=== 204, 'status should be 204');
                            console.assert(response.length === 0, 'response should be empty');
                        })
                    })
                })
        })
    })();
    
    (function(){
        console.log(' should fail on non-string full name');
    
        var fullname = [5,false,undefined,null,{},[],function(){},new Date].random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = password;
    
        var fail = undefined;
    
        try{
            registerUser(fullname,email,password,repassword);
        }catch (error) {
            fail = error;
        };
    
        console.assert(fail instanceof TypeError, 'fail should be defined and be an instance of typeError');
        console.assert(fail.message === fullname + ' is not a full name', 'error message should match expected');
    })();
    
    (function(){
        console.log(' should fail on empty or blank full name');
    
        var fullname = ['',' ','\t','\n'].random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = password;
    
        var fail;
    
        try{
            registerUser(fullname,email,password,repassword);
        } catch (error) {
            fail = error;
        };
    
        console.assert(fail instanceof Error, 'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'full name is empty or blank', 'error message should match expected');
    })();
    
    (function(){
        console.log(' should fail on non-string email');
    
        var fullname = 'John Doe ' + Math.random();
        var email = [5,false,undefined,null,{},[],function(){},new Date].random();
        var password = 'pass-' + Math.random();
        var repassword = password;
    
        var fail;
    
        try{
            registerUser(fullname,email,password,repassword);
        } catch (error) {
            fail = error;
        };
    
        console.assert(fail instanceof TypeError, 'fail should be defined and be an instance of TypeError');
        console.assert(fail.message === email + ' is not an e-mail', 'error message should match expected');
    })();
    
    (function(){
        console.log(' should fail on empty or blank email');
    
        var fullname = 'John Doe ' + Math.random();
        var email = ['',' ','\t','\n'].random();
        var password = 'pass-' + Math.random();
        var repassword = password;
        
        var fail;
        
        try{
            registerUser(fullname,email,password,repassword);
        } catch (error) {
            fail = error;
        };
    
        console.assert(fail instanceof Error, 'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'e-mail is empty or blank', 'error message should match expected');
    })();
    
    (function(){
        console.log(' should fail on invalid email');
    
        var fullname = 'John Doe ' + Math.random();
        var email = ['john-doe#mail.com','@mail.com','john-doe@mail','john-doe@','john@doe@mail.com'].random();
        var password = 'pass-' + Math.random();
        var repassword = password;
    
        var fail
    
        try{
            registerUser(fullname,email,password,repassword);
        } catch (error){
            fail = error;
        };
    
        console.assert(fail instanceof Error,' fail should be defined and be an instance of Error');
        console.assert(fail.message === 'invalid e-mail','error message should match expected');
    })();
    
    (function(){
        console.log(' should fail on non-string password');
    
        var fullname = 'John Doe ' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = [5,false,undefined,null,{},[],function(){},new Date].random();
        var repassword = 'pass-' + Math.random();
    
        var fail;
        try{
            registerUser(fullname,email,password,repassword);
        } catch (error) {
            fail = error;
        };
        console.assert(fail instanceof TypeError, 'fail should be defined and be an instance of TypeError');
        console.assert(fail.message === password + ' is not a password', 'error messages should match');
    })();
    
    (function(){
        console.log(' should fail on empty or blank password');
    
        var fullname = 'John Doe ' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = ['',' ','\t','\n'].random();
        var repassword = 'pass-' + Math.random();
    
        var fail;

        try{
            registerUser(fullname,email,password,repassword);
        } catch (error) {
            fail = error;
        };

        console.assert(fail instanceof Error, 'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'password is empty or blank', 'error messages should match');  
    })();
    
    (function(){
        console.log(' should fail on non-string password repeat');
    
        var fullname = 'John Doe ' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = [5,false,undefined,null,{},[],function(){},new Date].random();
    
        var fail;

        try{
            registerUser(fullname,email,password,repassword);
        } catch (error) {
            fail = error;
        };

        console.assert(fail instanceof TypeError, 'fail should be defined and be an instance of TypeError');
        console.assert(fail.message === repassword + ' is not a password repeat', 'error messages should match');  
    })();
    
    (function(){
        console.log(' should fail on empty or blank password repeat');
    
        var fullname = 'John Doe ' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = ['',' ','\t','\n'].random();
    
        var fail;

        try{
            registerUser(fullname,email,password,repassword);
        } catch (error) {
            fail = error;
        };

        console.assert(fail instanceof Error, 'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'password repeat is empty or blank', 'error messages should match');  
    })();
    
    (function(){
        console.log(' should fail on non-matching passwords');
    
        var fullname = 'John Doe ' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = password + '...';
    
        var fail;

        try{
            registerUser(fullname,email,password,repassword);
        } catch (error) {
            fail = error;
        };
        
        console.assert(fail instanceof Error, 'fail should be defined and be an instance of Error');
        console.assert(fail.message === 'passwords do not match', 'error messages should match');  
    })();
})();