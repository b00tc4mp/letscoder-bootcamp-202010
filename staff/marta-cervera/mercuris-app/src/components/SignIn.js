import './SignIn.sass'

function SignIn({ onSignIn }) {
    return <section className= "sign-in">
        <h2 className="sign-in_title">Sign In</h2>

        <form onSubmit= { event => {
            event.preventDefault()

            const { target: {email : { value: email}, password: { value:password}}} = event
        
            onSignIn(email, password)
        }}>
            <input type="email" name="email" placeholder="e-mail"/>
            <input type="password" name="password" placeholder="password" />
            <button>Send</button>

        </form>
        <p className="signUp">Already have an account? <span className="signUp__span" onClick={onSignIn}>Sign In</span></p> 

    </section>
}

export default SignIn