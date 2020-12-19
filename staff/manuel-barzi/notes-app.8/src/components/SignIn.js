import './SignIn.sass'
import { Link } from 'react-router-dom'
import { authenticateUser } from '../logic'
import { useState } from 'react'
import Feedback from './Feedback'
import { AuthError, FormatError, ContentError } from 'notes-errors'

export default function ({ onSignedIn }) {
    const [error, setError] = useState({})

    const handleSignIn = async (email, password) => {
        try {
            const token = await authenticateUser(email, password)

            sessionStorage.token = token

            onSignedIn()
        } catch (error) { // NOTE this catch now allows you to handle sync and async errors in one place (one of the many advantages of async-await)
            if (error instanceof AuthError || error instanceof TypeError || error instanceof FormatError || error instanceof ContentError)
                return setError({ message: error.message, level: 'warning' })

            setError({ message: error.message, level: 'error' })
        }
    }

    return <section className="sign-in">
        <h2>Sign In</h2>
        <form onSubmit={event => {
            event.preventDefault()

            const { target: { email: { value: email }, password: { value: password } } } = event

            handleSignIn(email, password)
        }}>
            <input type="email" name="email" placeholder="e-mail" />
            <input type="password" name="password" placeholder="password" />
            <button>Send</button>
        </form>

        {error && <Feedback message={error.message} level={error.level} />}

        Go to <Link to="/sign-up">Sign Up</Link>
    </section>
}