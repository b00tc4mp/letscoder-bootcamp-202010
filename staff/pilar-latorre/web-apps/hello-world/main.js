(function () {
    // root

    var root = document.getElementById('root')
    
    //title

    var title = mountTitle( function () {
        root.lastChild.replaceWith(access)

    });

    root.append(title)


    // access


    var access = mountAccess(function () {
        access.replaceWith(register)
    }, function(){
        access.replaceWith(login)
    })

    root.append(access)
       


    // register


    var register =mountRegister(function (fullname, email, password, repassword) {
        registerUser(fullname, email, password, repassword, function(error){
            if(error)
                alert(error.message)
            else register.replaceWith(confirm)

        })

    })

    // register confirm

    var confirm = mountRegisterConfirm(function () {
        confirm.replaceWith(login)
    })

    // login 
   
    var login = mountLogin(function(email,password){
            authenticateUser(email, password, function(error, token){
                if(error)
                    alert(error.message)
                else{
                    retrieveUser(token, function(error,resp){
                        if(!error){
                        var username = resp.fullname
                        var welcome = mountWelcome(username)
                        login.replaceWith(welcome)

                    }else
                        alert(error.message)
                     
                    })   
                }

            })

        })

    //welcome
    
    
})();

