import './SignUp.sass'

function SignUp({ onSignUp, onGoToSignIn }) {
    return <section className="signUp">
        <h2>Sign Up</h2>

        <form className="signUp__form" onSubmit={event => {
            event.preventDefault()

            const { target: { fullname: { value: fullname }, email: { value: email }, password: { value: password } } } = event

            onSignUp(fullname, email, password)
        }}>
            <input className="signUp__input" type="text" name="fullname" placeholder="fullname" />
            <input className="signUp__input" type="email" name="email" placeholder="e-mail" />
            <input className="signUp__input" type="password" name="password" placeholder="password" />
            <button className="signUp__button">Send</button>
        </form>
        <p className="signUp__p">Already have an account? <span className="signUp__span" onClick={onGoToSignIn}>sign in</span></p>
    </section>
}

export default SignUp