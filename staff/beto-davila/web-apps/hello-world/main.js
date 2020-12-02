(function () {
  // root
  var root = document.getElementById("root");

  // title visual behavior
  var title = mountTitle(function () {
    var sections = document.querySelectorAll("section");
    for (var i = 0; i < sections.length; i++) {
      sections[i].replaceWith(access);
    }
  });

  root.append(title);

  // 'Access' behavior setup on clicking buttons
  var access = mountAccess(
    function () {
      access.replaceWith(register);
    },
    function () {
      access.replaceWith(login);
    }
  );

  root.append(access);

  // Register form visual behavior after calling the registerUser function
  var register = mountRegister(function (fullname, email, password, repassword) {
    registerUser(fullname, email, password, repassword, function (error) {
      if (error) {
        alert(error.message);
      } else {
        register.replaceWith(confirm);
      }
    });
  });

  // register confirmation visual behavior
  var confirm = mountRegisterConfirm(function () {
    confirm.replaceWith(login);
  });

  // Visual behavior of the login section after calling authenticateUser
  var login = mountLogin(function (email, password) {
    authenticateUser(email, password, function (error, token) {
      if (error) alert(error.message);
      else {
        retrieveUser(token, function (error, user) {
          if (error) alert(error.message);
          else {
            var fullname = user.fullname;
            welcome.querySelector("h4").innerText =
              "Welcome, " + fullname + "!, be confortable ;)";
          }
        });
        login.replaceWith(welcome); // turning off 'login' after successful auth and retrieving
      }
    });
  });

  var welcome = mountWelcome(function () {
    welcome.replaceWith(deletion);
  }, function() {
    welcome.replaceWith(update);
  });

  //WIP

  /* var update = mountUpdateUser(function(update) {
      modifyUser(token, update, callback) {

      }
   });
   */


  var deletion = mountConfirmDelete(function (email, password) { 
    authenticateUser(email, password, function (error, token) {
      if (error) {
        alert(error.message);
      } else {
        unregisterUser(password, token, function (error) {
          if (error) alert(error.message);
          else {
            alert("The user was successfully unregistered");
          }
        });
      }
    });
    deletion.replaceWith(access);
  });


})();
