function Register ({onRegister}) {
    return <section className="register">
    {/* <p className="register__subtitle">Register now! It's free and only will take you 10 seconds :)</p> */}
    <form className="register__form" onSubmit = { function (event) {
        event.preventDefault();


        var fullname = event.target.fullname.value;
        var email = event.target.email.value;
        var password = event.target.password.value;
        var repassword = event.target.repassword.value;

        try {
            onRegister(fullname, email, password, repassword)
        } catch (error) {
            alert(error.message);
        }
    }}>
        <input type="text" name="fullname" placeholder="Fullname" id="" required/>
        <input type="email" name="email" placeholder="Your email" id="" required/>
        <input type="password" name="password" placeholder="Password" id="" required/>
        <input type="password" name="repassword" placeholder="Confirm password" required/>
        
        <button className="register__btn btn" type="submit">Register</button>
    </form>
</section>
}