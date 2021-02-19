import './SignIn.sass'
import { Link } from 'react-router-dom'
import { authenticateUser } from '../logic'
import { useState } from 'react'
import Feedback from './Feedback'
import { AuthError } from 'notes-errors'

export default function({ onSignedIn }) {
    const [error, setError] = useState({})

    const handleSignIn = (email, password) => {
        try {
            authenticateUser(email, password)
                .then(token => sessionStorage.token = token)
                .then(onSignedIn)
                .catch(error => {
                    if (error instanceof AuthError)
                        return setError({ message: error.message, level: 'warning' })

                    setError({ message: error.message, level: 'error' })
                })
        } catch (error) {
            if (error instanceof AuthError)
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