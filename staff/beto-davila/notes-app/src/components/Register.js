//import React from 'react'
import './Register.sass'

function Register({ onRegister, onGoToLogin }) {
    return <section className="register">
        <h2>Sign up</h2>

        <form onSubmit={event => {
          event.preventDefault()

          // const fullname = event.target.value
          // const email = event.target.value
          // const password = event.target.value

          const { target: { fullname: { value: fullname }, email: { value: email}, password: { value: password } }} = event
          console.log(fullname, email, password)

          onRegister(fullname, email, password)
        }}>
          <input type="text" name="fullname" placeholder="Your fullname" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="password" name="password" placeholder="Your password" />   
          <button className="register__btn btn" >Send</button>      
        </form>

        <span>or</span><a className="register__btn--login btn" onClick={onGoToLogin}> Login </a>
    </section>
}

export default Register