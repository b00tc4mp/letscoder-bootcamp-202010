import React from 'react'
import './Login.sass'

function Login({onLogin}) {
    return <section className="login">
        <h2>Sign in</h2>
        <form onSubmit={ event => {
          event.preventDefault()

          const { target: { email: { value: email}, password: { value: password } }} = event

          onLogin(email, password)
        }

        }>
          <input type="email" name="email" placeholder="Your email"/>
          <input type="password" name="password" placeholder="Your password"/>   
          <button>Send</button>      
        </form>
    </section>
}

export default Login