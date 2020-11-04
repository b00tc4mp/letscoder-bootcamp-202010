const { Component } = React


class Login extends Component {
    constructor() {
        super()

        this.state = {}
    }

    handleLogin = (email, password) => {
        try {
            authenticateUser(email, password, (error, token) => {
                if (error) return this.setState({ error: error.message })

                sessionStorage.token = token
                
                this.props.onLoginSuccess()
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    render() {
        const { state: { error }, handleLogin } = this

        return <section className="login">
            <form className="login__form" onSubmit={
                function (event) {
                    event.preventDefault()

                    const { target: { email: { value: email }, password: { value: password } } } = event

                    handleLogin(email, password)
                }
            }>
                <input className="login__input" type="email" name="email" placeholder="e-mail" required />
                <input className="login__input" type="password" name="password" placeholder="password" required />
                <button className="login__button">Login</button>
            </form>

            {error && <Feedback message={error} level="error" />}
        </section>
    }
}