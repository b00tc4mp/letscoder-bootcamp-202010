//import React from 'react'
import './Register.sass'

function Register({ onRegister }) {
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
          <button>Send</button>      
        </form>
    </section>
}

export default Register