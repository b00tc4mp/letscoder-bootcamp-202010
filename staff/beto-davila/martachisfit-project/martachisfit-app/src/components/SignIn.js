import './styles/SignIn.sass'

function SignIn({ onLogin }) {
    return <section className="sign-in">
        <h2 className="sign-in__title" >Acceso</h2>
        <form className="sign-in__form" onSubmit={event => {
            event.preventDefault()

            const { target: { email: { value: email }, password: { value: password } } } = event

            onLogin(email, password)
        }}>
            <input className='sign-in__input' type="email" name="email" placeholder="Introduce tu e-mail" required/>
            <input className='sign-in__input' type="password" name="password" placeholder="Introduce tu contraseña" required/>
            <button className='sign-in__btn'>Acceder</button>
        </form>
    </section>
}

export default SignIn