import './SignIn.sass'
import logo from "../assets/img/logo.png"
import { Link } from 'react-router-dom'
import { Feedback } from '.'

function SignIn({ onSignIn, error }) {
    return <section className="sign-in">
        <Link to='/'>
        <img className="sign-in__logo" src={logo} />
        </Link>
        <div className="sign-in__container">
            <form className="sign-in__container__form" onSubmit={event => {
                event.preventDefault()
                
                const { target: { email: { value: email }, password: { value: password } } } = event
                
                onSignIn(email, password)
            }}>
                {error && <Feedback error={error}/>}
                <input className="sign-in__container__form__input" type="email" name="email" placeholder="E-MAIL" />
                <input className="sign-in__container__form__input" type="password" name="password" placeholder="PASSWORD" />
                <button className="sign-in__container__form__button"> SIGN-IN </button>
                <hr />
                <p> IF YOU DONT HAVE AN ACCOUNT&nbsp; 
                    <Link className="link" to="/sign-up">
                        <span className="sign-in__container__form__sign-up">CREATE ONE</span>
                    </Link>
                </p>
            </form>
        </div>
    </section>
}

export default SignIn