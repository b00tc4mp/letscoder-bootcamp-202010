import './SignIn.sass'

function SignIn( {onSignIn, onGoToSignUp} ) {
    return <section className="signIn">
        <h2 className='signIn__title'>SIGN IN</h2>
        <form className='signIn__form' onSubmit={event => {
            event.preventDefault()

            const { target: { email: { value: email }, password: { value: password } } } = event

            onSignIn(email, password)
        }}>
            <>
            <input className='signIn__input' type="email" name="email" placeholder="e-mail" />
            <input className='signIn__input' type="password" name="password" placeholder="password" />
            </>
            <button className='signIn__button'>SEND</button>
        </form>

        <p className='signIn__p'>Don´t have an account? <span className='signIn__span' onClick={onGoToSignUp}>Sign Up</span></p>
    </section>
}

export default SignIn