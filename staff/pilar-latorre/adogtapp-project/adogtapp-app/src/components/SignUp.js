import './SignUp.sass'
import { Link } from 'react-router-dom'
import { Feedback} from '.'

function SignUp({ onSignUp, error}){
    return <div className="signUp">
        <h2 className="signUp__h1">Please give us some information about your shelter</h2>
        <img className='signUp__img' src="variosperretes2.jpg"/>  
        
        <form className="signUp__form" onSubmit={event => {
            event.preventDefault()

            const { target: { userName: { value: userName }, email: { value: email }, password: { value: password }, address: {value: address},  city: {value: city}, phone: {value: phone},  description: { value: description} } } = event

            onSignUp(userName, email, password, address, city, phone, description )
        }}>
            {error && <Feedback error={error}/>}
            <input className="signUp__input" type="text" name="userName" placeholder="shelter name" />
            <input className="signUp__input" type="email" name="email" placeholder="e-mail" />
            <input className="signUp__input" type="password" name="password" placeholder="password" />
            <input className="signUp__input" type="text" name="address" placeholder="address" />
            <input className="signUp__input" type="text" name="city" placeholder="city" />
            <input className="signUp__input" type="text" name="phone" placeholder="phone number" />
            <input className="signUp__input" type="text" name="description" placeholder="description" />
            <button className="signUp__button">SAVE INFO and GO TO SIGN IN</button>
        </form>
            <p className="signUp__p">Already have an account? <Link to = 'sign-in'><span className="signUp__span">Sign In</span></Link></p>
            

    </div>

}

export default SignUp