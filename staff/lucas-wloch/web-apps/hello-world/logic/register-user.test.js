(function(){
    console.log('TEST registerUser()');

    (function(){
        console.log(' should succeed on adding new user')
    
        var fullname = 'John Doe ' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
    
        registerUser(fullname,email,password,password);
    
        var user = users.find(function(user){return user.email === email});
    
        console.assert(user,'new user should be registered');
    })();
    
    (function(){
        console.log(' should fail on already existing user');
    
        var fullname = 'John Doe ' + Math.random();
        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
    
        var user = {
            fullname: fullname,
            email: email,
            password: password
        };
        users.push(user);
        var fail = undefined;
    
        try{
            registerUser(fullname,email,password,password);
        }catch(error){
            fail= error;
        };
    
        console.assert(fail, 'fail should be defined');
        console.assert(fail.message === 'user already exists', 'error messages should match');
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