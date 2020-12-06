import './SignUp.sass'
import logo from "../assets/img/logo.png"


function SignUp({ onSignUp, onGoToSignIn }) {
    return <section className="sign-up">
        <img className="sign-up__logo" src={ logo }/>
        <div className="sign-up__container">
        <form className="sign-up__container__form" onSubmit={event => {
            event.preventDefault()

            const { target: { fullname: {value: fullname}, email: {value: email}, password: {value: password } } } = event

            onSignUp(fullname, email, password)
        }}>
            <input className="sign-up__container__form__input" type= "text" name="fullname" placeholder="FULLNAME" />
            <input className="sign-up__container__form__input" type="email" name="email" placeholder="E-MAIL" />
            <input className="sign-up__container__form__input" type="password" name="password" placeholder="PASSWORD" />
            <button className="sign-up__container__form__button"> SEND </button>
            <hr/>    
        </form>
            <p> DO YOU HAVE AN ACCOUNT? THEN <span onClick={onGoToSignIn} className="sign-in__container__form__createone"> SIGN IN </span> </p>
        </div>
    </section>
}

export default SignUp