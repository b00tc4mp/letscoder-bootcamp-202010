function Register(props) {
    return <section className="register">
        <h2>Register</h2>

        <form className="register__form" onSubmit={function (event) {
            event.preventDefault()

            var fullname = event.target.fullname.value
            var email = event.target.email.value
            var password = event.target.password.value
            var repassword = event.target.repassword.value

            try {
                props.onRegister(fullname, email, password, repassword)
                // for(var i = 0; i < inputs.length; i++){
                //     inputs[i].value = '';
                // }
                // var _error = container.querySelector('.register__h3');
                // _error.innertext = '';
            } catch (error) {
                alert(error.message)
                // var _error = container.querySelector('.register__h3');
                // _error.innerText = error;
            }
        }}>
            <input type="text" name="fullname" placeholder="full name" required />
            <input type="email" name="email" placeholder="e-mail" required />
            <input type="password" name="password" placeholder="password" required />
            <input type="password" name="repassword" placeholder="repeat password" required />
            <button>Register</button>
        </form>
    </section>
}