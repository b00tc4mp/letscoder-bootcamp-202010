import React from 'react'
import './Login.sass'
import Feedback from './Feedback'
import { AuthError } from 'offers-errors'

function Login({ onLogin }) {
    // const [error, setError] = useState({})
    return <sections>

            <h1>Accede</h1>
        <form onSubmit={event => {
            event.preventDefault()

            const { target: { email: { value: email}, password: { value: password}}} = event

            onLogin(email, password)
        }}>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Constraseña" />
            <p>Al registrar o iniciar sesión, aceptas nuestros Términos y  Condiciones y la Política de Privacidad</p>
            <button className = 'entrar' >Entrar &#129321;</button>

            {/* {error && <Feedback message={error.message} level={error.level} />} */}
            
        </form>

    </sections>

}

export default Login