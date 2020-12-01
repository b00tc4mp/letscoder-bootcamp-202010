import './SignUp.sass'

function SignUp({ onSignUp }) {
    return <section className="sign-up">
        <h2>Sign Up</h2>

        <form onSubmit={event => {
            event.preventDefault()

            const { target: { fullname: {value: fullname}, email: {value: email}, password: {value: password } } } = event

            onSignUp(fullname, email, password)
        }}>
            <input type= "text" name="fullname" placeholder="fullname" />
            <input type="email" name="email" placeholder="e-mail" />
            <input type="password" name="password" placeholder="password" />
            <button> Send </button>
        </form>
    </section>
}

export default SignUp