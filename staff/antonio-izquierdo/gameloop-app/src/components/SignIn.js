import './SignIn.sass'
import logo from "../assets/img/logo.png"

function SignIn({ onSignIn, onGoToSignUp }) {
    return <section className="sign-in">
        <img className="sign-in__logo" src={ logo }/>
        <div className="sign-in__container">
        <form className="sign-in__container__form" onSubmit={event => {
            event.preventDefault()

            const { target: { email: {value: email}, password: {value: password } } } = event

            onSignIn(email, password)
        }}>
            <input className="sign-in__container__form__input" type="email" name="email" placeholder="E-MAIL" />
            <input className="sign-in__container__form__input" type="password" name="password" placeholder="PASSWORD" />
            <button className="sign-in__container__form__button"> SEND </button>
            <hr/>    
            <p> IF YOU DONT HAVE AN ACCOUNT <span onClick={onGoToSignUp} className="sign-in__container__form__createone">CREATE ONE </span> </p>
        </form>
        </div>
    </section>
}

export default SignIn