(function () { 
    // root

    var root = document.getElementById('root')
        
    //Title
    var title = mountTitle(function () {
        root.innerHTML = ''
        root.append(title);
        root.append(access);

    })

    root.append(title)


    // access

    var access = mountAccess(function () {
        access.replaceWith(register)
    }, function () {
        access.replaceWith(login)
    })

    root.append(access)



// register
 
    var register = mountRegister (function (fullname, email, password, repassword) {

        registerUser(fullname, email, password, repassword, function (error){
            if (error)
                alert(error.message)
            else register.replaceWith(proceedLogin)         
        })
    })


// register confirm

    var proceedLogin = mountRegisterConfirm(function(){
    
        proceedLogin.replaceWith(login)
});

// login

    
    var login = mountLogin (function(email, password){
        authenticateUser(email, password, function(error, token){
            if (error)
                alert(error.message)
            else {

                retrieveUser(token, function(error, user){
                    if (!error) { 
                        var username = user.fullname
                        welcome.querySelector('h2').innerText = 'welcome '+ username + ' , good to see you again'

                        /*var text = document.createElement('h2')
                        text.innerText = 'welcome '+ username + ' , good to see you again'
                        welcome.append(text)*/
                    }
                    })
                   
                login.replaceWith(welcome)
            }
        })
    });



    // welcome

    var welcome = mountWelcome(function() {
        console.log('72')
        var login = mountLogin(function(email, password){
            var password = password 
            console.log('75')
            authenticateUser(email, password, function(error, token){
                if (error){
                    console.log('78')
                alert(error.message)
            }   else {
                console.log('81')
                var token = token
                unregisterUser(password, token, function(error){
                    if (error){
                        console.log('84')
                        alert(error.message)
                    }else { 
                        console.log('88')
                        console.log('user unregistered OK!')
                        root.innerHTML = ''
                        root.append(title);
                        root.append(access);
                        //welcome.replaceWith(access)
                        //login.replaceWith(access)
                    }
            });
            };
        });
    });
    root.append(login)
});
        
})();