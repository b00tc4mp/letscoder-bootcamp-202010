function Login(props) {
    return <section className="login">
        <h2>Login</h2>

        <form className="login__form" onSubmit={
            function (event) {
                event.preventDefault()

                var email = event.target.email.value
                var password = event.target.password.value

                try {
                    props.onLogin(email, password)
                    // for(var i = 0; i < inputs.length; i++){
                    //     inputs[i].value = '';
                    // }
                    // var reTry = container.querySelector('.login__h3');
                    // reTry.innerText = '';
                } catch (error) {
                    alert(error.message)
                    // var reTry = container.querySelector('.login__h3');
                    // reTry.innerText = error;
                }
            }
        }>
            <input className="login__input" type="email" name="email" placeholder="e-mail" required />
            <input className="login__input" type="password" name="password" placeholder="password" required />
            <button className="login__button" >Login</button>
        </form>
    </section>
}