(function () {

    // onload

    var root = documnet.getElementById("root");
    // title
   var title = mountTitle(function () {
        var sections = document.querySelectorAll('section')

        for (var i = 0; i < sections.length; i++)
            sections[i].classList.add('off')

        var access = document.querySelector('.access')

        access.classList.remove('off')
        root.append(title)
    })

    // access
    var access = mountAccess(function () {
        
    root.lastChild.replaceWith(register)

    }, function () {

    root.lastChild.replaceWith(login)

    })
    
    root.append(access);
    // register
    var register = mountRegister( function (fullname, email, password, repassword) {
        registerUser(fullname, email, password, repassword, function(error){
            if (error){
                alert(error.message);
            } else{
                root.lastChild.replaceWith(confirm);
            }

        });

    });

    // register confirm
    var confirm = mountRegisterConfirm(function () {

        root.lastChild.replaceWith(login)
 
    });

    // login
    var login = mountLogin(function (email, password) {
        authenticateUser(email, password, function(error, token){
            if (error){ 
                alert(error.message)
            } else {
                root.lastChild.replaceWith(welcome)
            }

        }

    )});
    var welcome = mountWelcome();
})();