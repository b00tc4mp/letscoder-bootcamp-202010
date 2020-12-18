import './styles/SignUp.sass'
import { Feedback } from '.'

function SignUp({ onRegister, error }) {
    return <div className="sign-up-pseudo">
        <section className="sign-up">
            <h2 className="sign-up__title" >Registro</h2>
            <form className="sign-up__form" onSubmit={event => {
                event.preventDefault()

                const { target: { fullname: { value: fullname }, email: { value: email }, calories: { value: calories }, password: { value: password } } } = event

                onRegister(fullname, email, password, parseInt(calories))
            }}>
                <input className='sign-up__input' type="text" name="fullname" placeholder="Nombre y apellido" required />
                <input className='sign-up__input' type="email" name="email" placeholder="Introduce tu e-mail" required />
                <input className='sign-up__input' type="password" name="password" placeholder="Contraseña" required />
                <input className='sign-up__input' type="number" name="calories" placeholder="Calorías objetivo" required />
                <button className='sign-up__btn'>Continuar</button>
                {error && <Feedback error={error} />}
            </form>
        </section>
    </div>
}

export default SignUp