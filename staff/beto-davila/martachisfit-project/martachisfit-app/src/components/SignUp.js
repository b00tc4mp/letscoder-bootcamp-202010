import './SignUp.sass'

function SignUp({ onRegister }) {
    return <section className="sign-up">
        <h2 className="sign-up__title" >Registro</h2>
        <form className="sign-up__form" onSubmit={event => {
            event.preventDefault()

            const { target: { fullname: { value: fullname }, email: { value: email }, password: { value: password } } } = event

            onRegister(fullname, email, password)
        }}>
            <input className='sign-up__input' type="text" name="fullname" placeholder="Nombre y apellido" required/>
            <input className='sign-up__input' type="email" name="email" placeholder="Introduce tu e-mail" required/>
            <input className='sign-up__input' type="password" name="password" placeholder="Contraseña" required/>
            <button className='sign-up__btn'>Continuar</button>
        </form>
    </section>
}

export default SignUp