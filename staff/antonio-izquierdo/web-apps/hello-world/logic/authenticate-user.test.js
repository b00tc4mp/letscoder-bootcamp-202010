
(function () {
    console.log('TEST authenticateUser()');

    (function () {
        console.log(' should fail on empty or blank e-mail')
        var email = ['', ' ', '\t', '\n'].random()
        var password = 'secretword-' + Math.random()

        var fail
        
        try{
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of Error')
        console.assert(fail.message === 'e-mail is empty or blank') 
    })();

    (function () {
      console.log(' should fail on invalid e-mail')

        var email = ['can-dela@mail@com', '#mail.com', 'candel@.mail', 'candela.com'].random()
        var password = 'secretword-' + Math.random()

        var fail

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of Error')
        console.assert(fail.message === 'invalid e-mail', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on empty or blank password')

        var email = 'candelita@gmail.com'
        var password = ['', ' ', '\t', '\n'].random()

        var fail

        try{
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of Error')
        console.assert(fail.message === 'password is empty or blank', 'should error message match expected') 
    })();

    (function () {
        console.log(' should fail on wrong password')
  
          var email = 'candela-' + Math.random() + '@mail.com'
          var password = 'secretword-' + Math.random() 
          var repassword = password + "1234"
  
          var fail
  
          try {
              authenticateUser(email, password,repassword)
          } catch (error) {
              fail = error
          }
  
          console.assert(fail instanceof Error, 'should error be defined and an instance of Error')
          console.assert(fail.message === 'wrong credentials', 'should error message match expected')
      })();

    
      (function () {
        console.log (' should authenticate succesfully')
       
        var email = 'johndo-' + Math.random() + '@mail.com'
        var password = 'secretword' + Math.random()
        
        user = {
        email:email,
        password: password
        }

        users.push(user)

        var fail
         
        try {
        authenticateUser(email, password); 

        } catch (error) {
        fail = error
        }
        console.assert(!fail, "user should not throw error")
    })();

    
    (function() { 
    console.log (' should ')
    })();
})(); 
