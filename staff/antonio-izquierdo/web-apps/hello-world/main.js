(function () {
//root
var root = document.getElementById('root')

//tittle
var title = mountTitle(function(){
    root.lastChild.replaceWith(access)
})

root.append(title)

//access
var access = mountAccess(function () {
    access.replaceWith(register)
}, function() {
    access.replaceWith(login)  
})
root.append(access)

//register
var register = mountRegister(function(fullname, email, password, repassword){
    registerUser(fullname, name, email, password, repassword, function(error){
        if(error)
            alert(error.message)
        else register.replaceWith(confirm)
    })
})

//register confirm
var register = mountRegister(function(fullname, email, password, repassword){
    registerUser(fullname, email, password, repassword, function(error){
        if(error)
            alert(error.message)
        else register.replaceWith(confirm)
    })
})

//login
var login = mountLogin(function (email, password) {
    authenticateUser(email, password, function (error, token) {
        if (error)
            alert(error.message)
        else {
                // TODO call api to retrieve user, and then show welcome with user info
                retrieveUser(token, function(err, resp){
                    if(!error){
                        var username = resp.fullname
                        
                        var welcomeHtml = mountWelcome(username)

                        login.replaceWith(welcomeHtml)
                    }else {
                        alert(err.message)
                    }
                })
            
            // TODO call api to retrieve user, and then show welcome with user info
        }
    })
})
})();