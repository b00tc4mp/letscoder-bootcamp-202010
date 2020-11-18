import React from 'react'
import './Register.sass'

function Register() {
    return <section className="register">
        <h2>SING UP</h2>
        <form onSubmit={event =>{
            event.preventDefault()

            const { target : { fullname: { value: fullname}, email: {value:email}, password: {value:password}}} = event

            onRegister(fullname, email, password)

        }}>
            <input type= "text" name ="fullname" placeholder="fullname"/>
            <input type= "email" name ="email" placeholder="email"/>
            <input type= "password" name ="password" placeholder="password"/>
            <button>SEND</button>

        </form>
    </section>
    
}

export default Register

