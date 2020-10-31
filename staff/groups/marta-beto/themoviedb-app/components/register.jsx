function Register (props) {
    return <section class="register off">
    <h2 class="register__title">Register</h2>
    <p class="register__subtitle">Register now! It's free and only will take you 10 seconds :)</p>
    <form class="register__form" action="" onSubmit = { function (event) {
        event.preventDefault();

        var fullname = event.target.fullname.value;
        var email = event.target.email.value;
        var password = event.target.password.value;
        var repassword = event.target.repassword.value;

        try {
            props.onRegister(fullname, email, password, repassword)
        } catch (error) {
            alert(error.message);
        }
    }}>
        <input type="text" name="fullname" placeholder="fullname" id="" required/>
        <input type="email" name="email" placeholder="Your email" id="" required/>
        <input type="password" name="password" placeholder="password" id="" required/>
        <input type="password" name="repassword" placeholder="Confirm password" required/>
        
        <button class="register__btn btn" type="submit">Register</button>
    </form>
</section>
}