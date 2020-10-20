
// Back to home page
(function () {
  var home = document.getElementById("home");
  var sections = document.querySelectorAll("section");
  var title = document.querySelector("h1");

  title.onclick = function () {
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.add("off");
      home.classList.remove("off");
    }
  }

})();

// Home Page register or login
(function () {

  var home = document.querySelector('.home');  
  var register = home.querySelector('.home__register');

  register.onclick = function () {
    home.classList.add('off');
    var register = document.querySelector('.register');

    register.classList.remove('off');
  }
  var login = home.querySelector('.home__login');

  login.onclick = function () {
      home.classList.add('.off');
      var login = document.querySelector('.login');
      login.classList.remove('off');
  }
})();


// Register form

(function () {
  var register = document.querySelector(".register");

  var form = register.querySelector(".register__form");

  form.onsubmit = function (event) {
    event.preventDefault(); // Clicking on the submit button, prevents it from submitting a form

    var inputs = document.querySelectorAll("input");

    var fullname = inputs[0].value;
    var email = inputs[1].value;
    var password = inputs[2].value;
    var repassword = inputs[3].value;

    registerUser(fullname, email, password, repassword);


    var sections = document.querySelectorAll("section");

    var register = sections[1];

    register.classList.add("off");

    var confirm = sections[2];

    confirm.classList.remove("off");

    var message = document.querySelectorAll("p")[1];

    message.classList.remove("off");
  };
})();

// register confirmation

(function () {
  var login = document.querySelectorAll("button")[3];

  login.onclick = function () {
    var sections = document.querySelectorAll("section");

    var confirm = sections[2];

    confirm.classList.add("off");

    var welcome = sections[3];

    welcome.classList.remove("off");
  };
})();


// Login form

(function () {
  var login = document.querySelectorAll("button")[1];

  login.onclick = function () {
    var sections = document.querySelectorAll("section");

    var loginScreen = sections[2];

    loginScreen.classList.remove("off");

    var options = sections[0];

    options.classList.add("off");
  };
})();

// Result after login

(function() {
    
    var login = document.querySelector('.login__form');
    

    login.onsubmit = function(event) {
        event.preventDefault();
        var input = document.querySelectorAll('input');
        var email = input[4].value;
        var password = input[5].value;
        
        authenticateUser(email, password);
    }

})(); 
