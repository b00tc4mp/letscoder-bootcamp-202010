(function () {

// title behavior setup
  mountTitle('.title', function () {
    var sections = document.querySelectorAll("section");

    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.add("off"); // off all sections

      var home = document.querySelector(".home");
      home.classList.remove("off"); // 'turnin on' home
    }
  });

// 'Home' behavior setup on clicking buttons
mountHome('.home', function() {
    //onRegister
    var home = document.querySelector(".home");
    home.classList.add("off");

    var register = document.querySelector(".register");
    register.classList.remove("off");

}, function () {
    //onLogin
    var home = document.querySelector(".home");
    home.classList.add("off");

    var login = document.querySelector(".login");
    login.classList.remove("off");
});

// Register form visual behavior after calling the registerUser function
  mountRegister('.register', function(fullname, email, password, repassword){
    registerUser(fullname, email, password, repassword);
    var register = document.querySelector(".register");
    register.classList.add("off"); // off the register section

    var confirm = document.querySelector(".login");
    confirm.classList.remove("off"); // turning on the login section
  })  
      
// register confirmation visual behavior
  mountRegisterConfirm('.register-confirm', function () {
    var confirm = document.querySelector('.register-confirm');
    confirm.classList.add('off'); // off the register-confirm section

    var login = document.querySelector('.login');
    login.classList.remove('off'); // turning on the login section
  });


// Visual behavior of the login section after calling authenticateUser
    mountLogin('.login', function(email, password) {
      authenticateUser(email, password);
      var login = document.querySelector('.login');
      login.classList.add('off'); // turning off the login section after auth

      var welcome = document.querySelector('.welcome');
      welcome.classList.remove('off'); // Turning on the welcome section
  })

})();
