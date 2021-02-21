import './SignIn.sass'
import {Link} from 'react-router-dom'
import { Feedback } from '.'
import logo from "../assets/images/logo1.jpg"

function SignIn({ onSignIn, error }) {
    return <main className= "sign-in">
        <div className="sign-in__div">
        <img className="access__logo" src={logo} />   
        </div>
        <form className="sign-in__form"onSubmit= { event => {
            event.preventDefault()
            
            const { target: {email : { value: email}, password: { value:password} } } = event
            
            onSignIn(email, password)
        }}>
            { error && <Feedback error= {error}/>}          
            <input className="sign-in__form__input"type="email" name="email" placeholder="e-mail"/>
            <input className="sign-in__form__input" type="password" name="password" placeholder="password" />
            
            <button className="sign-in__form__btn">SIGN IN</button>
            

        </form>
       
        <Link to = '/sign-up'>Redirect to Sign Up</Link>

       
    </main>
}

export default SignIn