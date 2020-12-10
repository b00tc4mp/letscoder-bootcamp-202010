const { Component } = React

class Register extends Component {
    constructor() {
        super()

        this.state = {}
    }

    handleRegister = (fullname, email, password, repassword) => {
        try {
            registerUser(fullname, email, password, repassword, error => {
                if (error) return this.setState({ error: error.message })

                this.props.onRegisterSuccess()
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    render() {
        const { state: { error }, handleRegister } = this

        return <section className="register">
            <h2>Register</h2>

            <form className="register__form" onSubmit={function (event) {
                event.preventDefault()

                const { target: { fullname: { value: fullname }, email: { value: email }, password: { value: password }, repassword: { value: repassword } } } = event

                handleRegister(fullname, email, password, repassword)
            }}>
                <input type="text" name="fullname" placeholder="full name" required />
                <input type="email" name="email" placeholder="e-mail" required />
                <input type="password" name="password" placeholder="password" required />
                <input type="password" name="repassword" placeholder="repeat password" required />
                <button>Register</button>
            </form>

            {error && <Feedback message={error} level="error" />}
        </section >
    }
}