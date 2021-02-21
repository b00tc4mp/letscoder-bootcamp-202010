import './SignUp.sass'
import logo from "../assets/img/logo.png"
import { Link } from 'react-router-dom'
import { Feedback } from '.'

function SignUp({ onSignUp, error }) {
    return <section className="sign-up">
         <Link to='/'>
        <img className="sign-up__logo" src={logo}/>
        </Link>
        <div className="sign-up__container">
            <form className="sign-up__container__form" onSubmit={event => {
                event.preventDefault()

                const { target: { fullname: { value: fullname }, email: { value: email }, password: { value: password } } } = event

                onSignUp(fullname, email, password)
            }}>
                {error && <Feedback error={error}/>}
                <input className="sign-up__container__form__input" type="text" name="fullname" placeholder="FULLNAME" />
                <input className="sign-up__container__form__input" type="email" name="email" placeholder="E-MAIL" />
                <input className="sign-up__container__form__input" type="password" name="password" placeholder="PASSWORD" />
                <button className="sign-up__container__form__button"> SIGN-UP </button>
                <hr />
            </form>
            <p> DO YOU HAVE AN ACCOUNT? THEN&nbsp;  
                <Link className="link" to="/sign-in">
                    <span className="sign-up__container__form__sign-in">SIGN IN</span>
                </Link>
            </p>
        </div>
    </section>
}

export default SignUp