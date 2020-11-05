// Displays the resgister form. Gets the user inputs for registration and pass them to the callback 'handleRegister' when submitting the form.

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
    return <section className="register">
    <h3>Register</h3>

        <p>Create your account, It´s free and only takes a minute</p>

    <form className="register__form" onSubmit={
        function(event) {
            event.preventDefault();

            var fullname = event.target.fullname.value;
            var email = event.target.email.value;
            var password = event.target.password.value;
            var repassword = event.target.repassword.value;

            
            this.handleRegister(fullname, email, password, repassword);
           
        }
    }>
        <input type="text" name="fullname" placeholder="full name" required />
        <input type="email" name="email" placeholder="e-mail" required />
        <input type="password" name="password" placeholder="password" required />
        <input type="password" name="repassword" placeholder="repeat password" required />
        <button className = "register__btn btn">Register</button>
    </form>

    {error && <Feedback message={this.state.error} level="error" />}
</section>
    }
}
