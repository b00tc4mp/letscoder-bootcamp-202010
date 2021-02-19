import './SignUp.sass'
import { Link } from 'react-router-dom'
import { registerUser } from '../logic'
import { ConflictError, FormatError, ContentError } from 'notes-errors'
import { useState } from 'react'
import Feedback from './Feedback'

function SignUp({ onSignedUp }) {
  const [error, setError] = useState()

  const handleSignUp = async (fullname, email, password) => {
    try {
      await registerUser(fullname, email, password)

      onSignedUp()
    } catch (error) { // NOTE this catch now allows you to handle sync and async errors in one place (one of the many advantages of async-await)
      if (error instanceof ConflictError || error instanceof TypeError || error instanceof FormatError || error instanceof ContentError)
        return setError({ message: error.message, level: 'warning' })

      setError({ message: error.message, level: 'error' })
    }
  }

  return <section className="sign-up">
    <h2>Sign Up</h2>

    <form onSubmit={event => {
      event.preventDefault()

      const { target: { fullname: { value: fullname }, email: { value: email }, password: { value: password } } } = event

      handleSignUp(fullname, email, password)
    }}>
      <input type="text" name="fullname" placeholder="fullname" />
      <input type="email" name="email" placeholder="e-mail" />
      <input type="password" name="password" placeholder="password" />
      <button>Send</button>
    </form>

    {error && <Feedback message={error.message} level={error.level} />}

    Go to <Link to="/sign-in">Sign In</Link>
  </section>
}

export default SignUp