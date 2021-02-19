import './SignIn.sass'
import { Link } from 'react-router-dom'

function SignIn({ onSignIn }) {
    return <section className="sign-in">
        <h2>Sign In</h2>
        <form onSubmit={event => {
            event.preventDefault()

            const { target: { email: { value: email }, password: { value: password } } } = event

            onSignIn(email, password)
        }}>
            <input type="email" name="email" placeholder="e-mail" />
            <input type="password" name="password" placeholder="password" />
            <button>Send</button>
        </form>

        Go to <Link to="/sign-up">Sign Up</Link>
    </section>
}

export default SignIn