// Displays the login form and gets the user inputs to pass them to the callback 'handleLogin' when submitting. 

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

    render () {

        const {state: {error}, handleLogin} = this

    return <section className="login">
                <form className="login__form" onSubmit={
                    function (event) {
                        event.preventDefault()

                        var email = event.target.email.value
                        var password = event.target.password.value

                       handleLogin(email, password)
                    }}>
                    <input type="email" name="email" placeholder="e-mail" required />
                    <input type="password" name="password" placeholder="password" required />
                    <button className = "login__btn btn">Login</button>
                </form>

                {error && <Feedback message={error} level='error' />}
            </section>
    }
}