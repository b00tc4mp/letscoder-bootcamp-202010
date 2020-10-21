(function(){
    //title
    mountTitle(".title", function(){
        var sections = document.querySelectorAll("section")
        for(var i=0; i < sections.length; i++)
        sections[i].classList.add("off")

        var home= document.querySelector(".home")

        home.classList.remove("off")
    })
    // home

    mountHome(".home", function(){
        var home = document.querySelector(".home")
        home.classList.add("off")

        var register = document.querySelector(".home")
        
        home.classList.add("off")

        var register = document.querySelector(".register")

        register.classList.add("off")
    
}, function () {
    var home = document.querySelector('.home')

    home.classList.add('off')

    var login = document.querySelector(".login")

    login.classList.remove('off')
})
    
    //register
    mountRegister(".register", function(fullname, email, password, repassword){
        registerUser(fullname,email,password,repassword)
    
    var register = home.querySelector('.register')
    
    register.classList.add("off")
    var confirm = document.querySelector(".register-confirm")
    confirm.classList.remove("off")

    
    //register confirm
    mountRegisterConfirm(".register-confirm", function () {
        var confirm = documetn.querySelector(".register-confirm")
        confirm.classList.add ("off")

        var login = document.querySelector(".login")

        login.classList.remove ("off")
    })
    
    //// login
    mountLogin(".login", function(email, password){
        authenticateUser(email,password)

        var login = document.querySelector(".login")
        login.classList.add("off")
        var welcome = document.querySelector(".welcome")
        welcome.classList.remove(off)


    })
})();

