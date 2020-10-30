function Login({ onLogin }) {
    return <section className="login">
        <form className="login__form" onSubmit={
            function (event) {
                event.preventDefault()

                const { target: { email: {value: email}, password: {value: password } } } = event

                try {
                    onLogin(email, password)
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