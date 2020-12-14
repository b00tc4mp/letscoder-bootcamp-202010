import React from 'react'
import './Register.sass'


function Register({ onRegister, history }) {

    return <sections>
            <h1>¡Únete a huertea!</h1>
        <form onSubmit={event => {
            event.preventDefault()

            const { target: { fullname: { value: fullname}, email: { value: email}, password: { value: password}}} = event

            onRegister(fullname, email, password)
        }}>
            <input type="text" name="fullname" placeholder="Nombre y Apellidos" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Constraseña" />
            <p>Al registrar o iniciar sesión, aceptas nuestros Términos y  Condiciones y la Política de Privacidad</p>
            <button className = 'entrar' >Entrar &#129321;</button>

            
            
        </form>

    </sections>

}

export default Register