function Login(props) {
    return <section className="login">
        <form className="login__form" onSubmit={
            function (event) {
                event.preventDefault()

                var email = event.target.email.value
                var password = event.target.password.value

                try {
                    props.onLogin(email, password)
                } catch (error) {
                    alert(error.message)
                }
            }
        }>
            <input className="login__input" type="email" name="email" placeholder="e-mail" required />
            <input className="login__input" type="password" name="password" placeholder="password" required />
            <button className="login__button">Login</button>
        </form>
    </section>
}