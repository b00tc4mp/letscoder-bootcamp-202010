function Register(props) {
    return <section className="register">
    <h3>Register</h3>

    {/* <img className='register__img' src="../../hello-world/style/img/registration.jpeg" alt="register-img" /> */}
        <p>Create your account, It´s free and only takes a minute</p>

    <form className="register__form" onSubmit={
        function(event) {
            event.preventDefault();

            var fullname = event.target.fullname.value;
            var email = event.target.email.value;
            var password = event.target.password.value;
            var repassword = event.target.repassword.value;

            try {
                props.onRegister(fullname, email, password, repassword);
            } catch (error) {
                alert(error.message);
            }
        }
    }>
        <input type="text" name="fullname" placeholder="full name" required />
        <input type="email" name="email" placeholder="e-mail" required />
        <input type="password" name="password" placeholder="password" required />
        <input type="password" name="repassword" placeholder="repeat password" required />
        <button className = "register__btn btn">Register</button>
    </form>
</section>
}
