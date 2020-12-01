import './SignIn.sass'


function SignIn({ onSignIn }) {
    return <section className= "sign-in">
        <h2>Sign In</h2>

        <form onSubmit= { event => {
            event.preventDefault()

            const { target: {email : { value: email}, password: { value:password}}} = event
        
            onSignIn(email, password)
        }}>
            <input type="email" name="email" placeholder="e-mail"/>
            <input type="password" name="password" placeholder="password" />
            <button>Send</button>

        </form>

    </section>
}

export default SignIn