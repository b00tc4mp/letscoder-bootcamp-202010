// Mounting the 'register form' that calls onRegister function when submitting the register form.
function mountRegister(onRegister) {

  var container = mountContainer(`<section class="register">
    <h2>Register</h2>
    <img class='register__img' src="./style/img/registration.jpeg" alt="register-img">
        <p>Create your account, It´s free and only takes a minute</p>
        <form class="register__form" action="">
            <input type="text" name="fullname" placeholder="full name" required>
            <input type="email" name="email" placeholder="e-email" required>
            <input type="password" name="password" placeholder="password" required>
            <input type="password" name="repassword" placeholder="repeat password" required>
            <button class="register__btn btn" type="submit">Register</button>
        </form>
</section>`);

    var form = container.querySelector(".register__form");

    form.onsubmit = function (event) {
        event.preventDefault();

        var inputs = form.querySelectorAll("input");

        var fullname = inputs[0].value;
        var email = inputs[1].value;
        var password = inputs[2].value;
        var repassword = inputs[3].value;

        try {
            onRegister(fullname, email, password, repassword);
        } catch (error) {
            alert(error.message);
        }
  };

  return container;
}
